import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

export const getTasks = () => {
    return {
        type: GET_TASKS
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
};