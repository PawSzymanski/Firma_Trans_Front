import axios from 'axios';
import {SET_DETAILS} from "./types";
import {TGG_MODAL} from "./types";

export function fetchUserDetails() {
    return function(dispatch) {
        return axios.get("/api/clients/all")
            .then(({ data }) => {
                dispatch(setDetails(data));
            });
    };
}

function setDetails(data) {
    return {
        type: SET_DETAILS,
        payload: data,
    };
}

export function toggleModal(data) {
    return {
        type: TGG_MODAL,
        payload: data,
    };
}







