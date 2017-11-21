import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './ui/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import TodoFilter from './ui/TodoFilter'


import { ADD_TODO, DELETE_TODO} from './constants/ActionTypes'

class App extends Component {

  constructor(props){
    super(props)
    this.addToDoItem = this.addToDoItem.bind(this)
  }

  addToDoItem(newItemValue){
    console.log('addToDoItem->',newItemValue)
    //store.dispatch({type: ADD_TODO,item:{text:newItemValue,completed:false,id:100}})
  }

  deleteToDoItem(newItemValue){
    console.log('addToDoItem->',newItemValue)
    //store.dispatch({type: DELETE_TODO,item:newItemValue})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <AddTodo doOnSubmit={this.addToDoItem}/>
          <VisibleTodoList/>
          <TodoFilter />
        </div>
      </div>
    );
  }
}

export default App