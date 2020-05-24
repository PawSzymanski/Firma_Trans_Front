import axios from 'axios';
import {SET_USERS,TGG_MODAL,TGG_REG,TGG_LOG,BAR_VIS,SET_ROAD,AUTH_REQUEST,AUTH_SUCCESS,AUTH_FAILURE,SET_RESERVATION,TGG_DIALOG} from "./types";

export const authenticateFn = (login, password) => dispatch => {
    dispatch({ type: AUTH_REQUEST });
    return axios
        .post('/api/clients/login', {
            login,
            password,
        })
        .then(payload => {
            console.log(payload);
            dispatch(toggleModal());
            dispatch(toggleLogin());
            console.log("Login success")
            dispatch({ type: AUTH_SUCCESS, payload });
        })
        .catch(err => {
            console.log(err);
            alert.error('Wrong login or password')
            console.log('Wrong login or password')
            dispatch({ type: AUTH_FAILURE });
        });
};

export function fetchReservationDetails(user) {
    return function(dispatch) {
        return axios.get("/api/reservation/"+user)
            .then(({ data }) => {
                dispatch(setReservation(data));
            });
    };
}
function setReservation(data) {
    return {
        type: SET_RESERVATION,
        payload: data,
    };
}

export function fetchUserDetails() {
    return function(dispatch) {
        return axios.get("/api/clients/all")
            .then(({ data }) => {
                dispatch(setUser(data));
            });
    };
}

function setUser(data) {
    return {
        type: SET_USERS,
        payload: data,
    };
}

export function fetchRoadDetails(startPoint,endPoint) {
    console.log(startPoint);
    console.log(endPoint);
    return function(dispatch) {
        return axios.get("/api/connection/"+startPoint+"/to/"+endPoint)
            .then(({ data }) => {
                dispatch(setRoad(data));
            })
            .catch(err => {
                console.log(err)
            });
    };
}

function setRoad(data) {
    return {
        type: SET_ROAD,
        payload: data,
    };
}

export function toggleModal(data) {
    return {
        type: TGG_MODAL,
        payload: data,
    };
}

export function toggleDialog(data) {
    return {
        type: TGG_DIALOG,
        payload: data,
    };
}

export function toggleLogin(data) {
    return {
        type: TGG_LOG,
        payload: data,
    };
}

export function toggleRegister(data) {
    return {
        type: TGG_REG,
        payload: data,
    };
}

export function toggleVisible(data) {
    return {
        type: BAR_VIS,
        payload: data,
    };
}












