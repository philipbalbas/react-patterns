import React, { Component } from 'react'
import Button from '../Button'

import { Demo, View } from '../styles'

class Counter extends Component {
  state = { value: 0 }

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  getStateAndHelpers() {
    return {
      value: this.state.value,
      incrementProps: {
        onClick: this.increment,
        add: true
      },
      decrementProps: {
        onClick: this.decrement,
        add: false
      }
    }
  }

  render() {
    const { children } = this.props
    return children(this.getStateAndHelpers())
  }
}

const PropCollections = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      {({ value, incrementProps, decrementProps }) => (
        <div>
          <Button {...incrementProps} />
          <Button {...decrementProps} />
          <View>{value}</View>
        </div>
      )}
    </Counter>
  </Demo>
)

export default PropCollections
