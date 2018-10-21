import React, { Component } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

class Dropdown extends Component {
  state = { open: false }

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { children } = this.props
    return (
      <DropdownStyle>
        {children({ open: this.state.open, toggle: this.toggle })}
      </DropdownStyle>
    )
  }
}
const RenderProps = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown>
      {({ toggle, open }) => (
        <div>
          <Toggle open={open} onClick={toggle} />
          <button onClick={toggle}>Click here</button>
          {open && <Menu>Menu</Menu>}
        </div>
      )}
    </Dropdown>
  </Demo>
)

export default RenderProps
