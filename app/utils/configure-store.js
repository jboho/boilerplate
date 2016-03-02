/* global __DEVTOOLS__ */
import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'
import DevTools from '../components/util/DevTools'
import persistenceStore from '../persistence/store'
import reducers from '../reducers'

const middlewareBuilder = () => {

  let middleware = {}
  let universalMiddleware = [ thunk ]
  let allComposeElements = [ persistenceStore, reduxReactRouter({ createHistory }) ]

  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    middleware = applyMiddleware(...universalMiddleware)
    allComposeElements.push(middleware)
  } else {
    middleware = applyMiddleware(...universalMiddleware, logger)
    allComposeElements.push(middleware)
    if (__DEVTOOLS__) {
      allComposeElements.push(DevTools.instrument())
    }
  }

  return allComposeElements

}

const finalCreateStore = compose(...middlewareBuilder())(createStore)

export default function configureStore (initialState) {
  const store = finalCreateStore(reducers, initialState)
  if (module.hot)
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  return store
}
