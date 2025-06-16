import type { AppDispatch } from '../../app/store';
import { addTodo } from './todoSlice';

export const addTodoAsync = (text: string) => async (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(addTodo(text));
  }, 500);
};