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
    case ADD_TODO: {
      console.log('todos->ADD_TODO->action.item', action.item)
      return [...state, { text: action.item.text, completed: action.item.completed, id: action.id }]
    }
    case DELETE_TODO:
      return state
    case UPDATE_TODO: {
      console.log('todos->UPDATE_TODO->action.id', action.id)
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        } else {
          return Object.assign({},
            todo, { completed: !todo.completed })
        }
      }
      )
    }
    default:
      return state
  }
}