import React, { Component, createContext } from 'react'
import Button from '../Button'

import { Demo, View } from '../styles'

const CounterContext = createContext()

class Counter extends Component {
  static View = () => (
    <CounterContext.Consumer>
      {({ value }) => <View>{value}</View>}
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
        <div>{children}</div>
      </CounterContext.Provider>
    )
  }
}
const FlexibleComponents = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      <Counter.Increment />
      <Counter.Decrement />
      <Counter.View />
    </Counter>
  </Demo>
)

export default FlexibleComponents
