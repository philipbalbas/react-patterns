import React, { Component } from 'react'
import { Router } from '@reach/router'

import Navbar from './Navbar'
import Main from './pages/Main'
import RenderProps from './pages/RenderProps'
import CompoundComponents from './pages/CompoundComponents'
import FlexibleComponents from './pages/FlexibleComponents'
import PropCollections from './pages/PropCollections'
import PropGetters from './pages/PropGetters'
import StateInitializer from './pages/StateInitializer'
import StateReducer from './pages/StateReducer'
import ControlProps from './pages/ControlProps'
import Provider from './pages/Provider'
import HigherOrderComponent from './pages/HigherOrderComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Main path="/" title="React Patterns" />
          <CompoundComponents
            path="/compound-components"
            title="Compound Components"
          />
          <RenderProps path="/render-props" title="Render Props" />
          <FlexibleComponents
            path="/flexible-components"
            title="Flexible Components"
          />
          <PropCollections path="/prop-collections" title="Prop Collections" />
          <PropGetters path="/prop-getters" title="Prop Getters" />
          <StateInitializer
            path="/state-initializer"
            title="State Initializer"
          />
          <StateReducer path="/state-reducer" title="State Reducer" />
          <ControlProps path="/control-props" title="Control Props" />
          <Provider path="/provider" title="Provider" />
          <HigherOrderComponent
            path="/higher-order-component"
            title="Higher Order Component"
          />
        </Router>
      </div>
    )
  }
}

export default App
