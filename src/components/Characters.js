import React, { Component } from "react"
import axios from "axios"

class Characters extends Component {
  state = {
    data: [],
    filterData: [],
    search: ""
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.search && this.state.search.length > 1) {
        setTimeout(() => {
          let resultSearch = this.state.data.filter(
            character =>
              character.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) !== -1
          )
          this.setState({ filterData: resultSearch })
        }, 1000)
      } else if (!this.state.search) {
      }
    })
  }
  getCharacter = async () => {
    const res = await axios.get(
      "https://melroune.github.io/starwars-api/api/all.json"
    )
    this.setState({ data: res.data, filterData: res.data })
    console.log(this.state.data)
  }
  componentDidMount() {
    this.getCharacter()
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.getCharacter} />
        {this.state.filterData.map(character => (
          <p key={character.id}>{character.name}</p>
        ))}
      </div>
    )
  }
}

export default Characters
