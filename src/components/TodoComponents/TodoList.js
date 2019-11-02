// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.tasks);
  return (
    <section className="todoList">
      {props.tasks.map(each => {
        return (
          <Todo task={each} key={each.id} handleToggle={props.handleToggle} />
        );
      })}
    </section>
  );
};

export default TodoList;
