import React, { Component } from 'react'
import Toggle from '../Toggle'

import { Demo } from '../styles'

class Dropdown extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    return (
      <div>
        <Toggle open={this.state.open} onClick={this.toggle} />
      </div>
    )
  }
}

const Main = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown />
  </Demo>
)

export default Main
