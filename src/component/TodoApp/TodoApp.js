import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    list: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitList = (event) => {
    event.preventDefault();

    const { input } = this.state;
    // const allList = this.state.list;
    // allList.push(input);

    this.setState({
      list: [...this.state.list, input],
      input: "",
    });
  };

  deleteItem = (index) => {
    // const allList = this.state.list;

    // allList.splice(index, 1);

    // this.setState({
    //   list: allList,
    // });

    this.setState({
      list: this.state.list.filter((data, key) => key !== index),
    });
  };

  editItem = (index) => {
    const allList = this.state.list;

    const value = allList.slice(index, index + 1);

    this.setState({
      input: value,
    });
  };

  render() {
    const { input, list } = this.state;

    console.log(list);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.submitList}>
          <h1>Todo List</h1>

          <input
            type="text"
            name="input"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
        </form>
        <ul>
          {this.state.list.map((value, index) => (
            <li key={index}>
              {value}
              <div className="action-bar">
                <i
                  className="fas fa-edit editIcon"
                  onClick={() => this.editItem(index)}
                ></i>
                <i
                  className="fa fa-trash-alt"
                  aria-hidden="true"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
