import React, { Component } from 'react'
import Button from '../Button'

import { Demo } from '../styles'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

class Counter extends Component {
  static defaultProps = {
    initialValue: 0
  }

  initialState = { value: this.props.initialValue }

  state = this.initialState

  internalSetState = (changes, callback) => {
    this.setState(currentState => {
      const changesObject =
        typeof changes === 'function' ? changes(currentState) : changes

      const reducedChanges =
        this.props.stateReducer(currentState, changesObject) || {}

      return Object.keys(reducedChanges).length ? reducedChanges : null
    }, callback)
  }

  increment = () => {
    this.internalSetState({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.internalSetState({ type: 'DECREMENT' })
  }

  reset = () => {
    this.internalSetState({ type: 'RESET' })
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

class StateReducer extends Component {
  initialState = { value: 0 }

  counterStateReducer = (state, changes) => {
    switch (changes.type) {
      case 'INCREMENT': {
        if (state.value >= 5) {
          return state
        }
        return { value: state.value + 1 }
      }

      case 'DECREMENT': {
        return { value: state.value - 1 }
      }

      case 'RESET': {
        return this.initialState
      }

      default:
        return state
    }
  }

  render() {
    return (
      <Demo>
        <h1>{this.props.title}</h1>
        <Counter stateReducer={this.counterStateReducer}>
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
  }
}

export default StateReducer
