import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./todo-item";
import { AnimatePresence, motion } from "framer-motion";
import type { RootState } from "../redux/store";
import type { Todo } from "../types/todo";

interface DisplayTodosProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (todo: { id: number; item: string }) => void;
  completeTodo: (id: number) => void;
}

const DisplayTodos: React.FC<DisplayTodosProps> = ({
  todos,
  removeTodo,
  updateTodo,
  completeTodo,
}) => {
  const [sort, setSort] = useState<"active" | "completed" | "all">("active");

  const filterTodos = () => {
    switch (sort) {
      case "active":
        return todos.filter((item) => !item.completed);
      case "completed":
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        {["active", "completed", "all"].map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSort(status as any)}
          >
            {status[0].toUpperCase() + status.slice(1)}
          </motion.button>
        ))}
      </div>
      <ul>
        <AnimatePresence>
          {filterTodos().map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo: addTodos,
  removeTodo: removeTodos,
  updateTodo: updateTodos,
  completeTodo: completeTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);