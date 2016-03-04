import { createStore, applyMiddleware, compose } from 'redux'
import api from '../middleware/api'
import createHistory from 'history/lib/createBrowserHistory'
import createLogger from 'redux-logger'
import DevTools from '../components/util/DevTools'
import persistenceStore from '../persistence/store'
import reducers from '../reducers'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'

export default function configureStore (initialState) {
  const store = createStore(
    reducers,
    initialState,
    reduxReactRouter({ createHistory }),
    compose(
      applyMiddleware(thunk, api, persistenceStore, createLogger()),
      DevTools.instrument()
    )
  )
  if (module.hot)
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  return store
}

