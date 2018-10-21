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
// import StateInitializer from './pages/StateInitializer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Main path="/" title="React Patterns & Anti-Patterns" />
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
        </Router>
      </div>
    )
  }
}

export default App
