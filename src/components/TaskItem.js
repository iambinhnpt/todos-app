import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem,
      isEditTask: false,
      isCompleted: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.state.task, this.props.id);
    this.setState({
      isEditTask: false,
    });
  };

  handleToggle = () => {
    this.setState({
      isCompleted: !this.state.isCompleted,
    });
  };

  setEditTask = (editTask) => {
    this.setState({
      isEditTask: editTask,
    });
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };
  render() {
    return (
      <tr>
        {this.state.isEditTask ? (
          <>
            <td className='task-item'>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.task}
                  onChange={this.handleChange}
                />
              </form>
            </td>
            <td>
              <button onClick={this.handleSubmit} type="submit" className="btn-green">
                Save
              </button>
              <button onClick={() => this.setEditTask(false)} className="btn-red">Back</button>
            </td>
          </>
        ) : (
          <>
            <td onClick={this.handleToggle} className='task-item'>
              <input
                type="checkbox"
                readOnly
                checked={this.state.isCompleted}
              />
              <span className={this.state.isCompleted? 'completed':'not-completed'}>{this.props.taskItem}</span>
            </td>
            <td>
              <button onClick={() => this.setEditTask(true)} className="btn-green">Edit</button>
              <button onClick={this.handleDelete} className="btn-red">Delete</button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
