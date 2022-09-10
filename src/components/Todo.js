import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/todo/actions';
const Todo = (props) => {
    return (
        <>
          <li onClick={()=> props.toggleTodo(props.row.id)}>
            {props.row && props.row.complete ? <span style={{color: 'green'}}>Done</span>:<span style={{color: 'red'}}>To do</span>}
            - {props.row.content}
            </li>  
        </>
    );
};

const mapDispatchToProps= dispatch =>{
    return{
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}
export default connect(null,mapDispatchToProps)(Todo);