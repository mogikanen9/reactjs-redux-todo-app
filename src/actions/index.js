import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
let nextTodoId = 1

export const addTodo = newItem => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    item: newItem
  }
}

export const toggleTodo = id => {
  return {
    type: UPDATE_TODO,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}