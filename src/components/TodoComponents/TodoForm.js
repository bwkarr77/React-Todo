import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChange}
        type="text"
        name="task"
        value={props.value}
        placeholder="enter new task"
      />
      <button onClick={props.handleAddTask}>Add Task</button>
      <button onClick={props.handleClearTasks}>Remove Completed Tasks</button>
    </form>
  );
};

export default TodoForm;
