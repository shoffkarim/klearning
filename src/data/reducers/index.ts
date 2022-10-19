import { combineReducers } from 'redux'
import { arrayReducer } from './arrayReducer'

export const reducer = combineReducers({
    array: arrayReducer
});