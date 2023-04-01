import React, { Component } from 'react'
import TodoListApp from './components/TodoListApp'
import './assets/styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="todolist">
        <h1>My App</h1>
        <TodoListApp />
      </div>
    )
  }
}

export default App

/* import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <h1>Mobx Project</h1>
      <hr />
      <Counter />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
 */
