import React, { Component } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

class Dropdown extends Component {
  static Menu = ({ open }) => open && <Menu>Menu</Menu>
  static Button = ({ open, toggle }) => <Toggle open={open} onClick={toggle} />

  state = { open: false }

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { children } = this.props
    return (
      <DropdownStyle>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            open: this.state.open,
            toggle: this.toggle
          })
        )}
      </DropdownStyle>
    )
  }
}
const CompoundComponents = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown>
      <Dropdown.Button />
      <Dropdown.Menu />
    </Dropdown>
  </Demo>
)

export default CompoundComponents
