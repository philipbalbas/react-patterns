import React, { Component } from 'react'
import Button from '../Button'

import { Demo, View } from '../styles'

class Counter extends Component {
  state = { value: 0 }

  increment = () => {
    this.setState(state => ({ value: state.value + 1 }))
  }

  decrement = () => {
    this.setState(state => ({ value: state.value - 1 }))
  }

  render() {
    const { children } = this.props
    return children({
      value: this.state.value,
      increment: this.increment,
      decrement: this.decrement
    })
  }
}
const RenderProps = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Counter>
      {({ value, increment, decrement }) => (
        <div>
          <Button add onClick={increment} />
          <Button onClick={decrement} />
          <View>{value}</View>
        </div>
      )}
    </Counter>
  </Demo>
)

export default RenderProps
