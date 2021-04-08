import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer/TodoContainer"
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)