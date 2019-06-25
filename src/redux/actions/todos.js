export const addTodo = todo => (dispatch) => {
  const action = { type: 'ADD_TODO', payload: todo }
  dispatch(action)
}

export const completedTodo = id => (dispatch) => {
  dispatch({
    type: 'COMPLETED_TODO',
    payload: { id },
  })
}

// const exampleAction = (data) => {
//  // O dispatch está vindo do bindActionCreators
//   return (dispatch) => {
//     dispatch({ type: 'TYPE_ACTION', payload: { datasource: data } })
//   }
// }
