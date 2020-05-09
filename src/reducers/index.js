import { SET_USERS} from "../actions/types";
import {TGG_MODAL} from "../actions/types";
import {TGG_REG} from "../actions/types";
import {TGG_LOG} from "../actions/types";
import {BAR_VIS} from "../actions/types";
import {SET_ROAD} from "../actions/types";

const initialState = {
    users:[],
    isModalOpen:false,
    isRegisterOpen:false,
    isLoginOpen:false,
    isVisible:false,
    road:[],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload };
        case SET_ROAD:
            return {
                ...state,
                road: action.payload };
        case TGG_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen };
        case TGG_REG:
            return {
                ...state,
                isRegisterOpen: !state.isRegisterOpen };
        case TGG_LOG:
            return {
                ...state,
                isLoginOpen: !state.isLoginOpen };
        case BAR_VIS:
            return {
                ...state,
                isVisible: !state.isVisible };
        default:
            return state;
    }

};

export const getUsers = state => state.users;
export const getRoad = state => state.road;
export default rootReducer;

