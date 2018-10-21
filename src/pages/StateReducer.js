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

  internalSetState = (changes, callback) => {
    this.setState(currentState => {
      const changesObject =
        typeof changes === 'function' ? changes(currentState) : changes

      const reducedChanges =
        this.props.stateReducer(currentState, changesObject) || {}

      return Object.keys(reducedChanges).length ? reducedChanges : null
    }, callback)
  }

  toggle = () => {
    this.internalSetState(
      state => ({ open: !state.open }),
      () => this.props.onToggle()
    )
  }

  reset = () => {
    this.internalSetState(this.initialState, () => this.props.onReset())
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

class StateReducer extends Component {
  initialState = { timesClicked: 0 }

  state = this.initialState

  toggleStateReducer = (state, changes) => {
    if (this.state.timesClicked >= 4) {
      return { ...changes, open: false }
    }
    return changes
  }

  handleToggle = () => {
    this.setState(({ timesClicked }) => ({ timesClicked: timesClicked + 1 }))
  }

  handleReset = () => {
    this.setState(this.initialState)
  }

  render() {
    const { timesClicked } = this.state
    return (
      <Demo>
        <h1>{this.props.title}</h1>
        <Dropdown
          initialOpen={true}
          stateReducer={this.toggleStateReducer}
          onToggle={this.handleToggle}
          onReset={this.handleReset}
        >
          {({ open, reset, getTogglerProps }) => (
            <div>
              {timesClicked > 4 ? (
                <div>You clicked too much</div>
              ) : timesClicked > 0 ? (
                <div>Click cound: {timesClicked}</div>
              ) : null}
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
  }
}

export default StateReducer
