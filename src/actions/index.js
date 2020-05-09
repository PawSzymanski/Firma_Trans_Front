import axios from 'axios';
import {SET_USERS} from "./types";
import {TGG_MODAL} from "./types";
import {TGG_REG} from "./types";
import {TGG_LOG} from "./types";
import {BAR_VIS} from "./types";
import {SET_ROAD} from "./types";

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












