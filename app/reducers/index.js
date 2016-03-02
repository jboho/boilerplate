import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import application from './application'
import api from './api'

const rootReducer = combineReducers({
  application : application,
  api : api,
  router : routerStateReducer
})

export default rootReducer
