import { ARRAY_SET_ARRAY, COMPARISON_RESET, CONTROLS_RESET_ARRAY } from './../constants'
import { all, put, takeLatest } from 'redux-saga/effects'
import { newArray } from '../../utils/sorting'

function * resetArray (): Generator<any, any, unknown> {
  yield all([
    yield put({ type: COMPARISON_RESET }),
    yield put({ type: ARRAY_SET_ARRAY, value: newArray })
  ])
}

export default [
  takeLatest(CONTROLS_RESET_ARRAY, resetArray)
]
