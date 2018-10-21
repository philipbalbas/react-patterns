import React, { Component } from 'react'
import Button from '../Button'

import { CounterStyle, Menu, Demo } from '../styles'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

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

const PropGetters = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      {({ value, getIncrementProps, getDecrementProps }) => (
        <div>
          <Button {...getIncrementProps()} />
          <Button
            {...getDecrementProps({ onClick: () => console.log('clicked') })}
          />
          <p>{value}</p>
        </div>
      )}
    </Counter>
  </Demo>
)

export default PropGetters
