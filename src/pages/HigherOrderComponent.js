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

function withCounter(Component) {
  function Wrapper(props) {
    return (
      <CounterContext.Consumer>
        {counterContext => <Component context={counterContext} {...props} />}
      </CounterContext.Consumer>
    )
  }
  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`
  return Wrapper
}

const Layer1 = () => <Layer2 />

const Layer2 = withCounter(({ context: { value } }) => (
  <>
    <p>{value}</p>
    <Layer3 />
  </>
))

const Layer3 = () => <Layer4 />

const Layer4 = withCounter(({ context: { value, increment, decrement } }) => (
  <>
    <div>
      <Button add onClick={increment} />
      <Button onClick={decrement} />
    </div>
    <View>{value}</View>
  </>
))

const Provider = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      <Layer1 />
    </Counter>
  </Demo>
)

export default Provider
