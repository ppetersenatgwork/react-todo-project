import React, { useState, useEffect } from "react"
import TodosList from "../TodosList/TodosList"
import Header from "../Header/Header"
import InputTodo from "../InputTodo/InputTodo"
import TodosService from "../../services/TodosService"
import { Route, Switch } from "react-router-dom"
import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"
import Navbar from "../Navbar/Navbar"

export default function TodoContainer(props) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    async function initializeTodos() {
      setTodos(await TodosService.getTodos() || [])
    }
    initializeTodos();
  }, []);

  useEffect(() => {
    TodosService.persistTodos();
  }, [todos])

  function handleChangeProps(id) {
    console.log("clicked", id);
    setTodos(TodosService.toggleTodo(id));
  };

  function deleteTodo(id) {
    console.log("deleted", id);
    setTodos(TodosService.deleteTodo(id));
  };

  function addTodo(title) {
    console.log("Adding todo", title);
    setTodos(TodosService.addTodo(title));
  };

  function updateTodoTitle(title, id) {
    console.log(title, id)
    if (title.trim()) {
      setTodos(TodosService.updateTodoTitle(title, id));
    } else {
      alert("Please write item")
    }
  }

  console.log("Todos:", todos);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo
                addTodo={addTodo}
              />
              <TodosList
                todos={todos}
                handleChangeProps={handleChangeProps}
                deleteTodo={deleteTodo}
                updateTodoTitle={updateTodoTitle}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  )
}