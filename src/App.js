import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './ui/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import TodoFilter from './ui/TodoFilter'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <AddTodo/>
          <VisibleTodoList/>
          <TodoFilter />
        </div>
      </div>
    );
  }
}

export default App