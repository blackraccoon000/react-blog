import React from "react"
import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <div>
      <ul>
        <li><NavLink activeClassName="is-active" to="/" >Home</NavLink></li>
        <li><NavLink activeClassName="is-active" to="/dashboard" >Dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default NavMenu