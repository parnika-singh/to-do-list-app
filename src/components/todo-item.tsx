import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  item: Todo;
  updateTodo: (todo: { id: number; item: string }) => void;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  updateTodo,
  removeTodo,
  completeTodo,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const changeFocus = () => {
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const update = (id: number, value: string, e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      updateTodo({ id, item: value });
      if (inputRef.current) {
        inputRef.current.disabled = true;
      }
    }
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ scale: 0.9 }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current?.value || "", e)}
      />
      <div className="btns">
        <motion.button whileHover={{ scale: 1.4 }} onClick={changeFocus}>
          <AiFillEdit />
        </motion.button>
        {!item.completed && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          <IoClose />
        </motion.button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;