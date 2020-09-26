import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true,
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  render() {
    return <Todo todos={this.state.todos} />;
  }
}

export default App;
