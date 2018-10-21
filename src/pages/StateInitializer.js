import React, { Component } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

class Dropdown extends Component {
  static defaultProps = {
    open: false
  }

  initialState = { open: this.props.initialOpen }

  state = this.initialState

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  reset = () => {
    this.setState(this.initialState)
  }

  getStateAndHelpers() {
    return {
      open: this.state.open,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: ({ onClick, ...props } = {}) => ({
        'aria-expanded': this.state.on,
        onClick: callAll(onClick, this.toggle),
        ...props
      })
    }
  }

  render() {
    const { children } = this.props
    return <DropdownStyle>{children(this.getStateAndHelpers())}</DropdownStyle>
  }
}

const StateInitializer = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown initialOpen={true}>
      {({ open, reset, getTogglerProps }) => (
        <div>
          <Toggle open={open} {...getTogglerProps()} />
          <button
            {...getTogglerProps({ onClick: () => console.log('clicked') })}
          >
            Click here
          </button>
          <button onClick={reset}>Reset</button>
          {open && <Menu>Menu</Menu>}
        </div>
      )}
    </Dropdown>
  </Demo>
)

export default StateInitializer
