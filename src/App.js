import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./screen/Home"
import Search from "./screen/Search"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    )
  }
}

export default App
