import { ARRAY_SET_ARRAY, COMPARISON_RESET, CONTROLS_RESET_ARRAY } from './../constants'
import { all, put, select, takeLatest } from 'redux-saga/effects'
import { createArray } from '../../utils/sorting'

function * resetArray (): Generator<any, any, number> {
  const length = yield select(({ array }) => array.arrayLength)
  yield all([
    yield put({ type: COMPARISON_RESET }),
    yield put({ type: ARRAY_SET_ARRAY, value: createArray(length) })
  ])
}

export default [
  takeLatest(CONTROLS_RESET_ARRAY, resetArray)
]
