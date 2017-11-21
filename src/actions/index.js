let nextTodoId = 0

export const addTodo = newItem => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    item: newItem
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
