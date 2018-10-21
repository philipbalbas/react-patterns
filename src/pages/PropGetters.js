import React, { Component } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

class Dropdown extends Component {
  state = { open: false }

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getStateAndHelpers() {
    return {
      open: this.state.open,
      toggle: this.toggle,
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

const PropGetters = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown>
      {({ open, getTogglerProps }) => (
        <div>
          <Toggle open={open} {...getTogglerProps()} />
          <button
            {...getTogglerProps({ onClick: () => console.log('clicked') })}
          >
            Click here
          </button>
          {open && <Menu>Menu</Menu>}
        </div>
      )}
    </Dropdown>
  </Demo>
)

export default PropGetters
