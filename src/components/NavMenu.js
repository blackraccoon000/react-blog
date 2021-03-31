import React from "react"
import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <div>
      <ul data-testid="navMenuBar">
        <li><NavLink activeClassName="is-active" to="/" data-testid="HomeLink">Home</NavLink></li>
        <li><NavLink activeClassName="is-active" to="/dashboard" data-testid="DashboardLink">Dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default NavMenu