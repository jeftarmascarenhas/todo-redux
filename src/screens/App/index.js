import React from 'react'
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom'

import Todos from '../Todo'

function App () {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>App Router</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contato" component={Contato} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </section>
        <footer>By Router</footer>
      </div>
    </BrowserRouter>
  )
}

const Home = props => (
  <div>
    <h1>Home Page</h1>
    <button
      onClick={() => {
        console.log(props)
        props.history.push('contato', { data: [1, 2, 3, 4] })
      }}
    >
      Botton
    </button>
  </div>
)
const Blog = () => (
  <div>
    <h1>Blog Page</h1>
    <ul>
      <li>
        <Link to="/blog/post-1">Post 1</Link>
      </li>
      <li>
        <Link to="/blog/post-2">Post 2</Link>
      </li>
    </ul>
    <Route path="/blog/:category" component={Single} />
  </div>
)
const Single = props => (
  <div>
    <div>
      Single Post
      {props.match.params.category}
    </div>
  </div>
)
const Contato = (props) => {
  console.log(props.history.location.state)
  return <div>Contato Page</div>
}

export default App
