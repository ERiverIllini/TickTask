import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

export const getTasks = () => {
    return {
        type: GET_TASKS
    };
};