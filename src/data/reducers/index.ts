import { combineReducers } from 'redux'
import { arrayReducer } from './arrayReducer'
import { comparisonReducer } from './comparison'

export const reducer = combineReducers({
  array: arrayReducer,
  comparison: comparisonReducer
})
