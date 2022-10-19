import { createStore, Store, compose, applyMiddleware, AnyAction } from 'redux'
import { reducer } from './reducers'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = (): unknown => composeEnhancers(
    applyMiddleware(sagaMiddleware),
)

export const store = () => createStore(reducer, enhancer() as typeof compose)