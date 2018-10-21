import React, { Component } from 'react'
import styled from 'styled-components'

const ToggleStyle = styled.div`
  position: relative;
`

const Button = styled.button`
  padding: 1rem 3rem;
  background: ${props => (props.open ? '#1ca78f' : '#2d92ec')};
  border: none;
  color: white;
  font-family: 'Open Sans', x-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

const Menu = styled.div`
  position: absolute;
`

export default class Toggle extends Component {
  render() {
    const { open, onClick, ...props } = this.props

    return (
      <ToggleStyle>
        <Button open={open} onClick={onClick}>
          Toggle
        </Button>
      </ToggleStyle>
    )
  }
}
