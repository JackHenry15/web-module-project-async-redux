import {
    FETCH_PROS_SUCCESS,
    FETCH_PROS_START,
    FETCH_PROS_FAILURE
} from "../actions";

const initialState = {
    isLoading: false,
    pros: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_PROS_SUCCESS:
            return {
                ...state,
                pros: action.payload,
                isLoading: false
            };
        case FETCH_PROS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};