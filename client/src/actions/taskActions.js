import axios from 'axios'
import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from '../actions/types';

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios
        .get('/api/ToDo')
        .then(res =>
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        );
};

export const deleteTask = (id) => dispatch => {
    axios
        .delete(`/api/items/${id}`).then(res => 
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        );
};

export const addTask = (task) => dispatch => {
    axios
        .post('api/Todo', task)
        .then(res => 
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        );
};

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    }
}