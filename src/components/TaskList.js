import React, { Component } from "react";
import TaskItem from "./TaskItem";
export default class TaskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.props.tasks)}
          {this.props.tasks.map((item, index) => {
            return (
              <TaskItem
                key={index}
                id={index}
                taskItem={item}
                handleDelete={this.props.handleDelete}
                editTask={this.props.editTask}
                toggleTask={this.props.toggleTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
