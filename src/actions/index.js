import {} from '../constants/ActionTypes'
let nextTodoId = 1

export const addTodo = newItem => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    item: newItem
  }
}

export const toggleTodo = id => {
  return {
    type: 'UPDATE_TODO',
    id
  }
}
