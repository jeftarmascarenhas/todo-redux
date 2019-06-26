import React from 'react'

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

export default Home
