import React, { Component } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

class Dropdown extends Component {
  state = { open: false }

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getStateAndHelpers() {
    return {
      open: this.state.open,
      togglerProps: {
        'aria-expanded': this.state.open,
        onClick: this.toggle
      }
    }
  }

  render() {
    const { children } = this.props
    return <DropdownStyle>{children(this.getStateAndHelpers())}</DropdownStyle>
  }
}

const PropCollections = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown>
      {({ open, togglerProps }) => (
        <div>
          <Toggle open={open} {...togglerProps} />
          <button {...togglerProps}>Click here</button>
          {open && <Menu>Menu</Menu>}
        </div>
      )}
    </Dropdown>
  </Demo>
)

export default PropCollections
