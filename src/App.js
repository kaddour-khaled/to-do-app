import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ListItem from "./Components/listItems";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {
    todoItems: [
      { id: 1, textContent: "Task one.", isComplete: false },
      { id: 2, textContent: "Task Two.", isComplete: false },
      { id: 3, textContent: "Task Three.", isComplete: false },
      { id: 4, textContent: "Task four.", isComplete: false },
      { id: 5, textContent: "Task five.", isComplete: false },
    ],
  };

  handelCompleteEvent = (item) => {
    const items = [...this.state.todoItems];
    const itemIndex = items.indexOf(item);
    items[itemIndex].isComplete = !items[itemIndex].isComplete;
    this.setState({ items });
  };
  render() {
    return (
      <div className="App">
        <ListItem
          items={this.state.todoItems}
          onCompleteEvent={this.handelCompleteEvent}
        />
      </div>
    );
  }
}

export default App;
