import { takeLatest, put, PutEffect, race, RaceEffect, select, SelectEffect, take, TakeEffect } from 'redux-saga/effects'
import { COMPARISON_RESET, COMPARISON_SET_ACTIVE_ELEMENTS, COMPARISON_SET_SORTED_ELEMENTS, COMPARISON_TOGGLE_SORT, SORTING_BUBBLE_SORT } from './../../constants'
import { setNewParams, SetNewParamsType, setPause, SetPauseType, startSorting, StartSortingType } from './sorting'

const SPEED_MULTIPLIER = 80

export type BubbleSortHelperType = Generator<SelectEffect | RaceEffect<BubbleSortType | TakeEffect> | StartSortingType | PutEffect<{
  type: string
  value: boolean
}>, void, any>

function * bubbleSortHelper (): BubbleSortHelperType {
  const { array, arrayLength } = yield select(({ array }) => ({
    array: array.array,
    arrayLength: array.arrayLength
  }))

  yield startSorting()

  const { success } = yield race({
    success: bubbleSort(array, arrayLength),
    canceled: take(COMPARISON_RESET)
  })

  // TODO: fix return type
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (success) {
    yield put({ type: COMPARISON_TOGGLE_SORT, value: false })
  }
}

export type BubbleSortType = Generator<PutEffect<{
  type: string
  value: number[]
}> | SetPauseType | SetNewParamsType, boolean, unknown>

function * bubbleSort (array: number[], arrayLength: number): BubbleSortType {
  const completedElements = []

  for (let step = 0; step < arrayLength - 1; step++) {
    for (let compareIndex = 0; compareIndex < arrayLength - 1 - step; compareIndex++) {
      yield put({ type: COMPARISON_SET_ACTIVE_ELEMENTS, value: [compareIndex, compareIndex + 1] })

      yield setPause(SPEED_MULTIPLIER)

      const left = array[compareIndex]
      const right = array[compareIndex + 1]

      if (left > right) {
        const params = {
          [compareIndex]: right,
          [compareIndex + 1]: left
        }

        array[compareIndex] = right
        array[compareIndex + 1] = left

        yield setNewParams(params)

        yield setPause(SPEED_MULTIPLIER)
      }
    }
    completedElements.push(arrayLength - 1 - step)

    yield put({ type: COMPARISON_SET_SORTED_ELEMENTS, value: completedElements })
  }

  yield put({ type: COMPARISON_SET_SORTED_ELEMENTS, value: [0, ...completedElements] })

  return true
}

export default [
  takeLatest(SORTING_BUBBLE_SORT, bubbleSortHelper)
]
