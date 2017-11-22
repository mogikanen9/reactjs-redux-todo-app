import React, { Component } from 'react'
import './App.css'

import AddTodo from './ui/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import TodoFilter from './ui/TodoFilter'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"><h3>Welcome to TodoApp</h3></div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <AddTodo />
            <VisibleTodoList />
            <TodoFilter />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}
