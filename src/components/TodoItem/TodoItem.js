import React, { useState } from 'react';
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

export default function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const { completed, id, title } = props.todo

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  let handleEditing = () => {
    console.log("edit mode activated");
    setEditing(true);
  }

  let finishEditing = event => {
    console.log("Finished editing", event.key);
    if (event.key === "Enter") {
      setEditing(false);
    }
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.toggleTodo(id)}
        />
        <button
          onClick={() => props.deleteTodo(id)}
          className={styles.button}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.updateTodoTitle(e.target.value, id)
        }}
        onKeyDown={finishEditing}
      />
    </li>
  );
};