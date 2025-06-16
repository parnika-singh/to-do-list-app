import React from "react";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Redux Toolkit To-do App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
};

export default App;