import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = props => (
  <div>
    <header>
      <h1>App Router Header</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contato">
            Contato
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/todos">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/request">
            Request
          </NavLink>
        </li>
      </ul>
    </header>
    <div style={{ padding: 10, minHeight: 600 }}>{props.children}</div>
    <footer>By Router</footer>
  </div>
)

export default Layout
