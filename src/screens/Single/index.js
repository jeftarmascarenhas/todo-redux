import React from 'react'

const Single = props => (
  <div>
    <div>
      Single Post
      {props.match.params.category}
    </div>
  </div>
)

export default Single
