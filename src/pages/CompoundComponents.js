import React, { Component } from 'react'
import Button from '../Button'

import { Demo, View } from '../styles'

class Counter extends Component {
  static View = ({ value }) => <View>{value}</View>
  static Increment = ({ increment }) => <Button add onClick={increment} />
  static Decrement = ({ decrement }) => <Button onClick={decrement} />

  state = { value: 0 }

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            value: this.state.value,
            increment: this.increment,
            decrement: this.decrement
          })
        )}
      </div>
    )
  }
}
const CompoundComponents = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      <Counter.View />
      <Counter.Increment />
      <Counter.Decrement />
    </Counter>
  </Demo>
)

export default CompoundComponents
