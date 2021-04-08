import React, { useState, useRef, useEffect } from 'react';
import styles from "./TodoItem.module.css"
import { FaTrash, FaRegEdit } from "react-icons/fa"

export default function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) inputRef.current.focus();
  }, [editing]);

  const { completed, id, title } = props.todo

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const handleToggle = () => {
    if (!editing) {
      props.toggleTodo(id);
    }
  }

  const handleEditing = () => {
    console.log("edit mode activated");
    setEditing(true);
  }

  const finishEditing = event => {
    console.log("Finished editing", event.key);
    if (event.key) {
      if (event.key === "Enter") {
        setEditing(false);
      }
    } else {
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
      <div style={{ display: 'flex' }}>
        <div
          onClick={() => handleToggle()}
          onDoubleClick={handleEditing}
          style={viewMode}>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <div style={{ marginLeft: 'auto', marginTop: 'auto', display: editing ? 'none' : 'flex' }}>
          <button
            onClick={() => handleEditing()}
            className={styles.button}>
            <FaRegEdit style={{ color: "black", fontSize: "16px" }} />
          </button>
          <button
            onClick={() => props.deleteTodo(id)}
            className={styles.button}>
            <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
          </button>
        </div>
      </div>
      <input
        type="text"
        ref={inputRef}
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.updateTodoTitle(e.target.value, id)
        }}
        onKeyDown={finishEditing}
        onBlur={finishEditing}
      />
    </li>
  );
};