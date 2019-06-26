import React from 'react'
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom'

import Todos from '../screens/Todos'
import Home from '../screens/Home'
import Blog from '../screens/Blog'
import Contato from '../screens/Contato'
import Request from '../screens/Request'

import Layout from '../components/Layout'

function Routes () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Redirect to="/request" /> */}
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contato" component={Contato} />
          <Route path="/todos" component={Todos} />
          <Route path="/request" component={Request} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
