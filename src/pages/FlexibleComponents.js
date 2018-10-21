import React, { Component, createContext } from 'react'
import Toggle from '../Toggle'

import { DropdownStyle, Menu, Demo } from '../styles'

const DropdownContext = createContext()

class Dropdown extends Component {
  static Menu = () => (
    <DropdownContext.Consumer>
      {({ open }) => open && <Menu>Menu</Menu>}
    </DropdownContext.Consumer>
  )
  static Button = () => (
    <DropdownContext.Consumer>
      {({ open, toggle }) => <Toggle open={open} onClick={toggle} />}
    </DropdownContext.Consumer>
  )

  toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  state = { open: false, toggle: this.toggle }

  render() {
    const { children } = this.props
    return (
      <DropdownStyle>
        <DropdownContext.Provider value={this.state}>
          {children}
        </DropdownContext.Provider>
      </DropdownStyle>
    )
  }
}
const FlexibleComponents = props => (
  <Demo>
    <h1>{props.title}</h1>
    <Dropdown>
      <Dropdown.Button />
      <Dropdown.Menu />
    </Dropdown>
  </Demo>
)

export default FlexibleComponents
