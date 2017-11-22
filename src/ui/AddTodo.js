import React, { Component } from 'react'
import { addTodo } from '../actions/index'
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl,ControlLabel, Form } from 'react-bootstrap'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    let inputValue = this.input.value
    console.log('inputValue->', inputValue)

    this.props.dispatch(addTodo({ text: inputValue, completed: false }))

    this.input.value = ''
    return true
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup>
              <ControlLabel>ToDo:</ControlLabel>
              <FormControl type="text" maxLength="30" inputRef={(input) => this.input = input}/>                                        
          </FormGroup>
          <Button bsStyle="primary" type="submit">Add Todo</Button>
        </Form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)
export default AddTodo
