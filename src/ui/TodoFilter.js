import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export default class TodoFilter extends Component {

  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selectedKey) {
    console.log('selected->', selectedKey)
    this.props.onTodoFilter(selectedKey)
  }

  render() {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={this.props.visibilityFilter} onSelect={this.handleSelect}>
          <NavItem eventKey={'SHOW_ALL'} title="All">All</NavItem>
          <NavItem eventKey={'SHOW_COMPLETED'} title="Completed">Completed</NavItem>
          <NavItem eventKey={'SHOW_ACTIVE'} title="Active">Active</NavItem>
        </Nav>
      </div>
    )
  }
}
