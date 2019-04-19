import React from "react"

import { NavLink } from "react-router-dom"

import "./Header.css"
const Header = props => {
  return (
    <header className="App-header">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="selected" className="link">
            Search
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
