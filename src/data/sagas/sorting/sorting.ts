import { ARRAY_SET_ARRAY, COMPARISON_RESET, COMPARISON_SET_SORTED_ELEMENTS, COMPARISON_TOGGLE_SORT } from './../../constants'
import { CallEffect, delay, put, PutEffect, select, SelectEffect } from 'redux-saga/effects'

export interface Params {
  [key: number]: number
}

export type SetNewParamsType = Generator<SelectEffect | PutEffect<{
  type: string
  value: any
}>, void, number[]>

export function * setNewParams (params: Params): SetNewParamsType {
  const array = yield select(({ array }) => array.array)

  for (const index in params) {
    array[index] = params[index]
  }

  yield put({ type: ARRAY_SET_ARRAY, value: array })
}

export type SetPauseType = Generator<SelectEffect | CallEffect<true>, void, number>

export function * setPause (multiplier = 100): SetPauseType {
  const sortingSpeed = yield select(({ comparison }) => comparison.sortingSpeed)

  yield delay(multiplier / sortingSpeed)
}

export type StartSortingType = Generator<PutEffect<{
  type: any
}>, void, unknown>

export function * startSorting (): StartSortingType {
  yield put({ type: COMPARISON_RESET })
  yield put({ type: COMPARISON_TOGGLE_SORT, value: true })
}

export type AfterSuccessSortingType = Generator<SelectEffect | Generator<SelectEffect | CallEffect<true>, void, number> | PutEffect<{
  type: string
}>, void, number>

export function * afterSuccessSorting (): AfterSuccessSortingType {
  const sortedArrayLength = yield select(({ array }) => array.arrayLength)

  yield put({ type: COMPARISON_RESET })

  for (let length = 1; length <= sortedArrayLength; length++) {
    yield put({ type: COMPARISON_SET_SORTED_ELEMENTS, value: Array.from(Array(length).keys()) })
  }

  yield setPause(1)
}
