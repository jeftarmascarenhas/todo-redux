import React, { Component } from 'react'
import { connect } from 'react-redux'

let nextID = 0

class Todo extends Component {
  handleAction = () => {
    const action = {
      type: 'ADD_TODO', // type action or dispatch
      payload: {
        id: (nextID += 1),
        text: 'Novo',
        completed: false,
      },
    }
    this.props.dispatch(action)
  }

  handleAction2 = id => {
    const action = {
      type: 'COMPLETED_TODO',
      payload: { id },
    }
    this.props.dispatch(action)
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <button onClick={this.handleAction}>Action-add</button>
        {this.props.todos.map(todo => {
          return (
            <div key={todo.id}>
              {todo.text} - {todo.completed ? '[OK]' : '[ ]'}
              <button onClick={() => this.handleAction2(todo.id)}>Action2-completed</button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state: ', state)
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(Todo)
