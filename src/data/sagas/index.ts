import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import controls from './controls'
import bubbleSort from './sorting/bubbleSort'

export default function * rootSaga (): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([
    ...controls,
    ...bubbleSort
  ])
}
