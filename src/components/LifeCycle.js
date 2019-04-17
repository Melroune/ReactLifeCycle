import React, { Component } from "react"

class LifeCycle extends Component {
  state = {
    title: "",
    globalTitle: ""
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const concat = `Mon formulaire - <${this.state.title}>`
    console.log(concat)
    this.setState({ globalTitle: concat })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps)
    // console.log("prevState", prevState)
    if (this.state.globalTitle !== prevState.globalTitle) {
      console.log("Titre changé")
    }
  }
  componentDidMount() {
    console.log("Formulaire rendu")
  }
  render() {
    return (
      <>
        <p>title: {this.state.title}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </>
    )
  }
}

export default LifeCycle
