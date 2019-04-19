import React, { Component } from "react"
import Header from "../components/Header"
import LifeCycle from "../components/LifeCycle"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <LifeCycle />
      </div>
    )
  }
}

export default Home
