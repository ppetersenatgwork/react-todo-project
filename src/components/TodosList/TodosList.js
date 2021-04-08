import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

export default function TodosList(props) {
  return (
    <ul>
      {(props && props.todos && Array.isArray(props.todos)) ? props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodo={props.deleteTodo}
          updateTodoTitle={props.updateTodoTitle}
        />
      )): <p>No items to display</p>}
    </ul>
  );
};
