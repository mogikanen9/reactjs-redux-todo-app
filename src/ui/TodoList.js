import React,{Component} from 'react'
import { connect } from 'react-redux'

export default class TodoList extends Component{

    constructor(props){
        super(props)       
    }

    render(){
        return(
            <div>
                <div><h4>List of items:</h4></div>
                <ul>
                    {this.props.todos.map(function(listValue){
                        return <li key={listValue.text}>{listValue.text} - {listValue.completed}</li>;
                    })}  
                </ul>
            </div>
        )
    }
}