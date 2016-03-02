import React, { Component, PropTypes } from 'react'

export default class Application extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
