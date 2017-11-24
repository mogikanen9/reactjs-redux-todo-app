import React, { connect } from 'react-redux'
import TodoFilter from '../ui/TodoFilter'
import { setVisibilityFilter } from '../actions/index'

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTodoFilter: filter => {
            console.log('dispatch->', filter)
            dispatch(setVisibilityFilter(filter))
        }
    }
}

const VisibleTodoFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)

export default VisibleTodoFilter