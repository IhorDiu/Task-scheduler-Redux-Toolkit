import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');
export const deleteAllCompleted = createAction('tasks/deleteAllCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');

