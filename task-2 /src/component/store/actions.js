import axiosAPI from "../../axiosApi";
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const fetchTodoRequest = () => {
    return {type: FETCH_TODO_REQUEST}
};
export const fetchTodoSuccess = todo => {
    return {type: FETCH_TODO_SUCCESS, todo}
};
export const fetchTodoError = error => {
    return {type: FETCH_TODO_ERROR, error}
};
export const fetchTodo = () => {
    return dispatch => {
        dispatch(fetchTodoRequest());
        axiosAPI.get('/todo.json').then(response => {
            dispatch(fetchTodoSuccess(response.data));
        }, error => {
            dispatch(fetchTodoError(error))
        })
    }
};
export const todoPost = data => {
    return dispatch => {
        dispatch(fetchTodoRequest());
        axiosAPI.post('/todo.json', data).then(() => {
            dispatch(fetchTodo())
        }, error => {
            dispatch(fetchTodoError(error))
        })
    }
};
export const todoDelete = (id) => {
    return dispatch => {
        dispatch(fetchTodoRequest());
        axiosAPI.delete(`/todo/${id}.json`).then(()=> {
            dispatch(fetchTodo())
        }, error => {
            dispatch(fetchTodoError(error))
        })
    }
};
export const add = () => {
    return {type: ADD};
};
export const remove = () => {
    return {type: REMOVE};
};
