import React, { Component } from 'react'
import Button from '../Button'

import { Demo } from '../styles'

class Counter extends Component {
  state = { value: 0 }

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <Button add onClick={this.increment} />
        <Button onClick={this.decrement} />
      </div>
    )
  }
}

const Main = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter />
  </Demo>
)

export default Main
