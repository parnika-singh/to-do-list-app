import React from 'react';
import TodoInput from './components/todoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;