import React,{Component} from 'react'
import {addTodo} from '../actions/index'
import { connect } from 'react-redux'


class AddTodo extends Component{

    constructor(props){
        super(props)                      
        this.handleSubmit = this.handleSubmit.bind(this)
    }   

    handleSubmit(e){
        e.preventDefault()        
        let inputValue = this.input.value
        console.log('inputValue->',inputValue)

        this.props.dispatch(addTodo({text:inputValue, completed:false}))
        
        this.input.value = ''
        return true
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" maxLength="30" ref={(input) => this.input = input}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

AddTodo = connect()(AddTodo)

export default AddTodo
