import React from 'react'
import { Link, Route } from 'react-router-dom'

import Single from '../Single'

const Blog = () => (
  <div>
    <h1>Blog Page</h1>
    <ul>
      <li>
        <Link to="/blog/filmes/post-1">Post 1</Link>
      </li>
      <li>
        <Link to="/blog/cultura/post-2">Post 2</Link>
      </li>
    </ul>
    <Route path="/blog/:category/:title" component={Single} />
  </div>
)

export default Blog
