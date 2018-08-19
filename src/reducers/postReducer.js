import { FETCH_POSTS_FULFILLED, FETCH_POSTS_PENDING, FETCH_POSTS_REJECTED } from "../actions/types";


const initialState = {
    nextPage: undefined,
    previousPage: undefined,
    results: [],
    fetching: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_PENDING:
            return {
                ...state, fetching: true
            };
        case FETCH_POSTS_FULFILLED:
            let data = action.payload.data;
            return {
                previousPage: data.previous, nextPage: data.next, results: state.results.concat(data.results),
                fetching: false, error: null
            };
        case FETCH_POSTS_REJECTED:
            return {...state, fetching: false, error: action.payload.message};
        default:
            return state;
    }
}
