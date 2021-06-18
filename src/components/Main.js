import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = [];
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.createTask = this.createTask.bind(this);
  }
  createTask = (task) => {
    if (task.trim() === "") {
      alert("Task can't be empty");
      return;
    }
    tasks.push(task);
    this.setState({ tasks: tasks });
    return;
  };
  handleDelete = (id) => {
    this.setState({
      tasks: tasks.splice(id, 1),
    });
  };
  editTask = (taskEdit, id) => {
    tasks[id] = taskEdit;
    this.setState({
      tasks: tasks,
    });
  };

  render() {
    return (
      <div className="main">
        <h1 className="title">Todos App</h1>
        <CreateTask createTask={this.createTask} />
        <TaskList
          tasks={tasks}
          handleDelete={this.handleDelete}
          editTask={this.editTask}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}
