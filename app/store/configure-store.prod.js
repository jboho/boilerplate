import { createStore, applyMiddleware } from 'redux'
import api from '../middleware/api'
import createHistory from 'history/lib/createBrowserHistory'
import persistenceStore from '../persistence/store'
import reducers from '../reducers'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'

export default function configureStore (initialState) {
  return createStore(
    reducers,
    initialState,
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunk, api, persistenceStore)
  )
}
