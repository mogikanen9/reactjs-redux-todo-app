import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox } from 'react-bootstrap'
import { toggleTodo } from '../actions/index'

export default class TodoList extends Component {

  constructor(props) {
    super(props)
    this.handleTogle = this.handleTogle.bind(this)
  }

  handleTogle(listValueId) {
    this.props.dispatch(toggleTodo(listValueId))
  }

  render() {
    return (
      <div>
        <div><h4>List of items:</h4></div>
        <ul>
          {this.props.todos.map(function (listValue) {
            console.log('listValue->', listValue)
            return <li key={listValue.id}>
              <Checkbox checked={(listValue.completed && listValue.completed === true)} >
                {listValue.text}
              </Checkbox>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
