import React from 'react'
import Todo from './Todo'


export default function Todos(props) {
  let mystyle={
      minHeight:"100vh",
      margin:"40px auto"
  }

  return (
    <div className='container my-3' style={mystyle}>
      <h3 >Todos List</h3>
      {/* for loop */}
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
          return (
          <><Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          <hr /></>
          )
          
      })
    }
      
      
    </div>
  )
}
