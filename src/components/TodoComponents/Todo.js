import React from "react";

const Todo = props => {
  console.log(props.task);
  return (
    <div
      style={props.task.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggle(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
