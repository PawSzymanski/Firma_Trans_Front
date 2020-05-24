import {SET_USERS,TGG_MODAL,TGG_REG,TGG_LOG,BAR_VIS,SET_ROAD,AUTH_SUCCESS,SET_RESERVATION,TGG_DIALOG} from "../actions/types";

const initialState = {
    users:[],
    isModalOpen:false,
    isRegisterOpen:false,
    isLoginOpen:false,
    isVisible:false,
    road:[],
    userID:'',
    userLogin:'',
    isLogged:false,
    reservation:[],
    isDialogOpen:false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userID: action.payload.data.id,
                userLogin: action.payload.data.login,
                isLogged:!state.isLogged,
            };
        case SET_RESERVATION:
            return {
                ...state,
                reservation: action.payload };
        case SET_USERS:
            return {
                ...state,
                users: action.payload };
        case SET_ROAD:
            return {
                ...state,
                road: action.payload };
        case TGG_DIALOG:
            return {
                ...state,
                isDialogOpen: !state.isDialogOpen };
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
export const setReservation = state => state.reservation;
export default rootReducer;

