import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { addTodo, completedTodo } from '../../redux/actions/todos'

let nextID = 0

class Todo extends Component {
  state = {
    text: '',
  }

  handleTodoSubmit = event => {
    event.preventDefault()
    const { text } = this.state
    const todo = {
      id: (nextID += 1),
      text,
      completed: false,
    }
    this.props.addTodo(todo)
    this.setState({ text: '' })
  }

  handleCompleted = id => {
    this.props.completedTodo(id)
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <h1>Todo</h1>
        <h1>{this.props.teste}</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input onChange={this.handleChange} value={text} />
          <button type="submit">Action-add</button>
        </form>
        {this.props.todos.map(todo => {
          return (
            <div key={todo.id}>
              {todo.text} - {todo.completed ? '[OK]' : '[ ]'}
              <button onClick={() => this.handleCompleted(todo.id)}>Ok</button>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo: addTodo, completedTodo: completedTodo }, dispatch)
}

Todo.defaultProps = {}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  completedTodo: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo)
