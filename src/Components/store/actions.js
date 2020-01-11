import axiosAPI from "../../axiosAPI";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST}
};

export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter}
};

export const fetchCounterError = error => {
  return {type: FETCH_COUNTER_ERROR, error}
};

export const fetchCounter = () => {
  return dispatch => {
      dispatch(fetchCounterRequest());
      axiosAPI.get('counter.json').then(response => {
        dispatch(fetchCounterSuccess(response.data))
      }, error => {
          dispatch(fetchCounterError(error))
      })
  }
};

export const incrementCounter = () => {
  return {type: INCREMENT};
};
export const decrementCounter = () => {
  return {type: DECREMENT};
};
export const addCounter = amount => {
  return {type: ADD, amount};
};
export const subtract = amount => {
  return {type: SUBTRACT, amount};
};