import React from 'react'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import * as components from './components'

const {
  Application,
  Home,
} = components

export default function renderRoutes () {
  return (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Home} />
      </Route>
    </ReduxRouter>
  )
}
