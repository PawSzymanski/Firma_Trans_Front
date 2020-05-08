import axios from 'axios';
import {SET_DETAILS} from "./types";

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
        payload: data
    };
}





