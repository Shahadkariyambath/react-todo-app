import React, { Component } from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={TodoApp} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    );
  }
}
