import {SET_DETAILS} from "../actions/types";

const initialState = {
    users:[],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAILS:
            return {
                users: action.payload };

        default:
            return state;
    }

};

export const getProducts = state => state.users;
export default rootReducer;

