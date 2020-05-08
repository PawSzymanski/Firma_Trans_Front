import {SET_DETAILS} from "../actions/types";
import {TGG_MODAL} from "../actions/types";

const initialState = {
    users:[],
   isModalOpen:false,

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAILS:
            return {
                ...state,
                users: action.payload };
        case TGG_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen };
        default:
            return state;
    }

};

export const getProducts = state => state.users;
export default rootReducer;

