import React, { Component } from 'react'
import Button from '../Button'

import { CounterStyle, Menu, Demo } from '../styles'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

class Counter extends Component {
  static defaultProps = {
    initialValue: 0
  }

  initialState = { value: this.props.initialValue }

  state = this.initialState

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  reset = () => {
    this.setState(this.initialState)
  }

  getStateAndHelpers() {
    return {
      value: this.state.value,
      reset: this.reset,
      getIncrementProps: ({ onClick, ...props } = {}) => ({
        add: true,
        onClick: callAll(onClick, this.increment),
        ...props
      }),
      getDecrementProps: ({ onClick, ...props } = {}) => ({
        add: false,
        onClick: callAll(onClick, this.decrement),
        ...props
      })
    }
  }

  render() {
    const { children } = this.props
    return children(this.getStateAndHelpers())
  }
}

const StateInitializer = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter initialValue={100}>
      {({ value, reset, getIncrementProps, getDecrementProps }) => (
        <div>
          <Button {...getIncrementProps()} />
          <Button {...getDecrementProps()} />
          <button onClick={reset}>Reset</button>
          <p>{value}</p>
        </div>
      )}
    </Counter>
  </Demo>
)

export default StateInitializer
