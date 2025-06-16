import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type { Todo } from "../types/todo";

const initialState: Todo[] = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodos: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action: PayloadAction<{ id: number; item: string }>) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, item: action.payload.item } : todo
      );
    },
    completeTodos: (state, action: PayloadAction<number>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;