import React, { Component } from 'react'
import { Checkbox } from 'react-bootstrap'

export default class TodoList extends Component {
  constructor (props) {
    super(props)
    this.renderCheckbox = this.renderCheckbox.bind(this)
  }

  renderCheckbox (listValue) {
    console.log('listValue->', listValue)
    return <li key={listValue.id}>
      <Checkbox checked={(listValue.completed && listValue.completed === true)}
        onChange={() => this.props.onTodoClick(listValue.id)}>
        {listValue.text}
      </Checkbox>
    </li>
  }

  render () {
    return (
      <div>
        <div><h4>List of items:</h4></div>
        <ul>
          {this.props.todos.map(val => this.renderCheckbox(val))}
        </ul>
      </div>
    )
  }
}
