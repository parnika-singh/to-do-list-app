import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodoAsync } from '../features/todos/todoThunks';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodoAsync(text));
      setText('');
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;