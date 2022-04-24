import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer  from './reducer'

import { Map } from 'immutable'

const initialState = Map()

export default function configureStore () {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
}