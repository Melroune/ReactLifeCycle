import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import LifeCycle from "./components/LifeCycle"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LifeCycle />
      </div>
    )
  }
}

export default App
