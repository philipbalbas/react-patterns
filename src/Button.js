import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: 1rem;
  background: ${props => (props.add ? '#2d92ec' : '#e74c3c')};
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

export default class Button extends Component {
  render() {
    const { onClick, add } = this.props

    return (
      <ButtonStyle add={add} onClick={onClick}>
        {add ? '+' : '-'}
      </ButtonStyle>
    )
  }
}
