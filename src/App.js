import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ListItem from "./Components/listItems";
import "font-awesome/css/font-awesome.css";
import Form from "./Components/form";

class App extends Component {
  state = {
    toDoItems: [
      { id: 1, textContent: "Task one.", isComplete: false },
      { id: 2, textContent: "Task Two.", isComplete: false },
      { id: 3, textContent: "Task Three.", isComplete: false },
      { id: 4, textContent: "Task four.", isComplete: false },
      { id: 5, textContent: "Task five.", isComplete: false },
    ],
  };

  handelCompleteEvent = (item) => {
    const items = [...this.state.toDoItems];
    const itemIndex = items.indexOf(item);
    items[itemIndex].isComplete = !items[itemIndex].isComplete;
    this.setState({ items });
  };

  handelDeleteEvent = (item) => {
    const items = [...this.state.toDoItems];
    const newItems = items.filter((i) => item.id !== i.id);
    this.setState({ toDoItems: newItems });
    console.log(this.state);
  };

  handelAdd = (value) => {
    const lastIndex = this.state.toDoItems[this.state.toDoItems.length - 1].id;
    const newItem = {
      id: lastIndex + 1,
      textContent: value,
      isComplete: false,
    };
    const toDoItems = [...this.state.toDoItems, newItem];
    this.setState({ toDoItems });
  };

  render() {
    return (
      <div className="App">
        <Form onAdd={this.handelAdd} />
        <ListItem
          items={this.state.toDoItems}
          onCompleteEvent={this.handelCompleteEvent}
          onDelete={this.handelDeleteEvent}
        />
      </div>
    );
  }
}

export default App;
