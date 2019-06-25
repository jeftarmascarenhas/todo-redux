export default (state = [], action) => {
  console.log('Action: ', action)
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload]
  }
  if (action.type === 'COMPLETED_TODO') {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed,
      }
    })
  }
  return state
}
