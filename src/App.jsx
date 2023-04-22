import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/footer';
import Addtodo from './components/addtodo';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import About from './components/About';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("iam deleted of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("Iam adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // ...todos is for aray 
    console.log(myTodo);



  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>

      <Header title="My todos list" searchbar={true} />



      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />



      <Footer />

    </>

  );
}

export default App;
