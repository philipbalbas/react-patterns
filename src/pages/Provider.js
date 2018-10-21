import React, { Component, createContext } from 'react'
import Button from '../Button'

import { Demo, View } from '../styles'

const CounterContext = createContext()

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
      <CounterContext.Provider
        value={{
          value: this.state.value,
          increment: this.increment,
          decrement: this.decrement
        }}
        {...this.props}
      />
    )
  }
}

const Layer1 = () => <Layer2 />
const Layer2 = () => (
  <CounterContext.Consumer>
    {({ value }) => (
      <>
        <p>{value}</p>
        <Layer3 />
      </>
    )}
  </CounterContext.Consumer>
)
const Layer3 = () => <Layer4 />

const Layer4 = () => (
  <CounterContext.Consumer>
    {({ value, increment, decrement }) => (
      <>
        <div>
          <Button add onClick={increment} />
          <Button onClick={decrement} />
        </div>
        <View>{value}</View>
      </>
    )}
  </CounterContext.Consumer>
)

const Provider = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      <Layer1 />
    </Counter>
  </Demo>
)

export default Provider
