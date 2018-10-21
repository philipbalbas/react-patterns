import React, { Component, createContext } from 'react'
import Button from '../Button'

import { Demo } from '../styles'

const CounterContext = createContext()

class Counter extends Component {
  static View = () => (
    <CounterContext.Consumer>
      {({ value }) => <p>{value}</p>}
    </CounterContext.Consumer>
  )
  static Increment = () => (
    <CounterContext.Consumer>
      {({ increment }) => <Button add onClick={increment} />}
    </CounterContext.Consumer>
  )

  static Decrement = () => (
    <CounterContext.Consumer>
      {({ decrement }) => <Button onClick={decrement} />}
    </CounterContext.Consumer>
  )

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  state = { value: 0, increment: this.increment, decrement: this.decrement }

  render() {
    const { children } = this.props
    return (
      <CounterContext.Provider value={this.state}>
        {children}
      </CounterContext.Provider>
    )
  }
}
const FlexibleComponents = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      <Counter.View />
      <Counter.Increment />
      <Counter.Decrement />
    </Counter>
  </Demo>
)

export default FlexibleComponents
