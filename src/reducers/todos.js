import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:{
      console.log('todos->ADD_TODO->action.item',action.item)  
      return [...state, action.item]
    }
    case DELETE_TODO:
      return state
    case UPDATE_TODO:
      return state  
    default:
      return state
  }
}