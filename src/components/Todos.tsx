import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import type { Todo } from "../types/todo";
import type { RootState } from "../redux/store";

interface TodosProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo.trim() === "") {
      alert("Input is Empty");
    } else {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={add}
      >
        <GoPlus />
      </motion.button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo: addTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);