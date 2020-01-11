export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

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