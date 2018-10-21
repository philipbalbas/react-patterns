import React, { Component } from 'react'
import { Link } from '@reach/router'
import logo from './logo.svg'

import { NavbarStyle, Logo, NavLink, LinkGroup } from './styles'

export default class Navbar extends Component {
  render() {
    return (
      <NavbarStyle>
        <Link to="/">
          <Logo src={logo} alt="React Logo" />
        </Link>
        <LinkGroup>
          <NavLink>
            <Link to="/compound-components">Compound Components</Link>
          </NavLink>
          <NavLink>
            <Link to="/flexible-components">Flexible Components</Link>
          </NavLink>
          <NavLink>
            <Link to="/render-props">Render Props</Link>
          </NavLink>
          <NavLink>
            <Link to="/prop-collections">Props Collection</Link>
          </NavLink>
          <NavLink>
            <Link to="/prop-getters">Props Getters</Link>
          </NavLink>
          <NavLink>
            <Link to="/state-initializer">State Initializer</Link>
          </NavLink>
          <NavLink>
            <Link to="/state-reducer">State Reducer</Link>
          </NavLink>
          <NavLink>
            <Link to="/provider">Provider</Link>
          </NavLink>
          <NavLink>
            <Link to="/portal">Portal</Link>
          </NavLink>
        </LinkGroup>
      </NavbarStyle>
    )
  }
}
