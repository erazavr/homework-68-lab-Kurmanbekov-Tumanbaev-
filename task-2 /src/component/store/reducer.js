import {FETCH_TODO_SUCCESS} from "./actions";

const initialState = {
    tasks: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return {...state, tasks: action.todo};
        default:
            return state
    }
};
export default reducer