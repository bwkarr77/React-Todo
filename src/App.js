import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//declare my class below
class App extends React.Component {
  constructor() {
    //builds out the constructor
    super(); //gives us access to all components in parent class
    this.state = {
      tasks: [
        { task: "Task 1", id: 6541381354, completed: false },
        { task: "Task 2", id: 123556, completed: false }
      ],
      task: ""
    };
  }

  //
  addTask = event => {
    event.preventDefault();
    const taskNew = {
      task: this.state.task,
      id: Date.parse(new Date()),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, taskNew],
      task: ""
    });
  };

  changeTask = e => this.setState({ [e.target.name]: e.target.value });

  toggleTask = id => {
    let scopeTasks = this.state.tasks.slice();
    console.log("Toggled", scopeTasks);
    scopeTasks = scopeTasks.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ scopeTasks });
  };

  clearCompleted = e => {
    e.preventDefault();
    let completedTask = this.state.tasks.filter(item => !item.completed);
    this.setState({ completedTask });
    console.log(this.state, completedTask);
  };

  render() {
    //calls/creates the class
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggle={this.toggleTask} tasks={this.state.tasks} />
        <TodoForm
          value={this.state.task}
          handleChange={this.changeTask}
          handleAddTask={this.addTask}
          handleClearTasks={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
