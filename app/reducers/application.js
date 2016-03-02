import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  locale: 'en',
  error: null
}

const actionHandlers = {
  [constants.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload }),

  [constants.SHOW_ERROR]: (state, action) => {
    const { payload, source } = action
    return Object.assign({}, state, {
      error: {
        source,
        message: payload.message,
        statusCode: payload.statusCode || payload.code,
        body: payload.body || (payload instanceof Error ?
          (payload.toString() + '\n' + payload.stack) : payload)
      }
    })
  },
  [constants.HIDE_ERROR]: state => ({ ...state, ...{ error: null } }),
}

export default createReducer(initialState, actionHandlers)
