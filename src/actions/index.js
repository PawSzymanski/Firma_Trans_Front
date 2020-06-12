import axios from 'axios';
import {
    SET_USERS,
    TGG_MODAL,
    TGG_REG,
    TGG_LOG,
    BAR_VIS,
    SET_ROAD,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    SET_RESERVATION,
    TGG_DIALOG,
    SET_ALL_ROAD,
    LOG_OUT,
    SET_CONN,
    SET_POINTS
} from "./types";


export const authenticateFn = (login, password) => dispatch => {
    dispatch({ type: AUTH_REQUEST });
    return axios
        .post('/api/clients/login', {
            login,
            password,
        })
        .then(payload => {
            dispatch(toggleModal());
            dispatch(toggleLogin());
            console.log("Login success")
            dispatch({ type: AUTH_SUCCESS, payload });
            return true;
        })
        .catch(err => {
            console.log(err);
            console.log('Wrong login or password')
            dispatch({ type: AUTH_FAILURE });
            return false;
        });
};

export function fetchReservationDetails(user) {
    return function(dispatch) {
        return axios.get("/api/reservation/"+user)
            .then(({ data }) => {
                dispatch(setReservation(data));
            })
            .catch(err => {
                console.log(err)
            });

    };
}

function setReservation(data) {
    return {
        type: SET_RESERVATION,
        payload: data,
    };
}


export function isLogout(data) {
    return {
        type: LOG_OUT,
        payload: data,
    };
}

export const fetchUserPoints = (user)=> {
    return function(dispatch) {
        return axios.get("/api/points/get/"+user)
            .then(({ data }) => {
                dispatch(setPoints(data));
            })
            .catch(err => {
                    console.log(err)
                });
    };

}

function setPoints(data) {
    return {
        type: SET_POINTS,
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

export const fetchRoadDetails = (startPoint,endPoint) => dispatch =>{
        return axios.get("/api/connection/"+startPoint+"/to/"+endPoint)
            .then(({ data }) => {
                dispatch(setRoad(data));
                    return data.length > 0;
            })
            .catch(err => {
                console.log(err)
            });
}



function setRoad(data) {
    return {
        type: SET_ROAD,
        payload: data,
    };
}

export function fetchAllRoadDetails() {
    return async function(dispatch) {
        return await axios.get("/api/connection/allTrips")
            .then(({ data }) => {
                dispatch(setAllRoad(data));
            })
            .catch(err => {
                console.log(err)
            });
    };
}

function setAllRoad(data) {
    return {
        type: SET_ALL_ROAD,
        payload: data,
    };
}

export function fetchAllConnection() {
    return function (dispatch) {
        return axios.get("/api/connection/allConnections")
            .then(({data}) => {
                dispatch(setAllConnection(data));
            })
            .catch(err => {
                console.log(err)
            });
    }
}

function setAllConnection(data) {
    return {
        type: SET_CONN,
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













