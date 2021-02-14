import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ListItem from "./Components/listItems";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {
    todoItems: [
      { id: 1, textContent: "Task one.", completed: false },
      { id: 2, textContent: "Task Two.", completed: false },
      { id: 3, textContent: "Task Three.", completed: false },
      { id: 4, textContent: "Task four.", completed: false },
      { id: 5, textContent: "Task five.", completed: false },
    ],
  };
  render() {
    return (
      <div className="App">
        <ListItem items={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
