import React, { Component } from 'react'
import Button from '../Button'

import { Demo } from '../styles'

class Counter extends Component {
  state = { value: 0 }

  isControlled(prop) {
    return this.props[prop] !== undefined
  }

  getState() {
    return {
      value: this.isControlled('value') ? this.props.value : this.state.value
    }
  }

  increment = () => {
    if (this.isControlled('value')) {
      this.props.onClick(this.getState().value + 1)
    }
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    if (this.isControlled('value')) {
      this.props.onClick(this.getState().value - 1)
    }
    this.setState(state => ({ value: state.value - 1 }))
  }

  render() {
    return (
      <div>
        <Button add onClick={this.increment} />
        <Button onClick={this.decrement} />
        <p>{this.getState().value}</p>
      </div>
    )
  }
}

class ControlProps extends Component {
  state = {
    value: 0
  }

  onClick = value => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <Demo>
        <h1>{this.props.title}</h1>
        <Counter value={value} onClick={this.onClick} />
        <Counter value={value} onClick={this.onClick} />
      </Demo>
    )
  }
}

export default ControlProps
