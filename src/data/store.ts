import { createStore, applyMiddleware, compose, Store } from 'redux'

import { reducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose

const configureStore = (): Store => {
  const buildAccordingEnv = composeEnhancers(applyMiddleware(sagaMiddleware))

  const createdStore = createStore(reducer, buildAccordingEnv)

  sagaMiddleware.run(sagas)

  return createdStore
}

const store = configureStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
