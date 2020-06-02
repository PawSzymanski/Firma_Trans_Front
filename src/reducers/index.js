import {
    SET_USERS,
    TGG_MODAL,
    TGG_REG,
    TGG_LOG,
    BAR_VIS,
    SET_ROAD,
    AUTH_SUCCESS,
    SET_RESERVATION,
    TGG_DIALOG,
    SET_ALL_ROAD,
    LOG_OUT,
    SET_CONN,
} from "../actions/types";

const initialState = {
    users:[],
    isModalOpen:false,
    isRegisterOpen:false,
    isLoginOpen:false,
    isVisible:false,
    road:[],
    allRoad:[],
    allConnection:[],
    userID:'',
    userLogin:'',
    isLogged:false,
    reservation:[],
    isDialogOpen:false,
    isRoadDialogOpen:false,
    userRole:'',

}

const rootReducer =  (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userID: action.payload.data.id,
                userLogin:action.payload.data.login,
                userRole:action.payload.data.role.role,
                isLogged:!state.isLogged,
            };
        case LOG_OUT:
            return {
                ...state,
                userRole: '',
                userID: '',
                userLogin: '',
                isLogged:false,
                isRoadDialogOpen:false,
                road:[]};
        case SET_RESERVATION:
            return {
                ...state,
                reservation: action.payload };
        case SET_CONN:
            return {
                ...state,
                allConnection: action.payload };
        case SET_ALL_ROAD:
            return Object.assign({}, state, {
                ...state,
                allRoad: action.payload });
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
export const getConnection = state => state.allConnection;
export const getUsers = state => state.users;
export const getRoad = state => state.road;
export const getAllRoad = state => state.allRoad;
export const setReservation = state => state.reservation;
export default rootReducer;

