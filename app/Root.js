/* global __DEVTOOLS__ */
import '../assets/styles/'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import configureStore from './store'
import renderRoutes from './routes'
import initialState from './state'

export const store = configureStore(initialState)

function getRootChildren () {
  const rootChildren = [
    <div key="rootDiv">
      {renderRoutes()}
    </div>
  ]
  if (__DEVTOOLS__) {
    const DevTools = require('./components/util/DevTools').default
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}

class Root extends Component {

  static propTypes = {
    application: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>{getRootChildren()}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
