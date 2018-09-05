import { USER_LOGIN, LOGIN_INPUT_CHANGE } from './types';
import {PropTypes} from "prop-types";
import store from "../store";
import axios from "axios/index";


export const loginInputChange = ({ field, value }) => {
    return {
        type: LOGIN_INPUT_CHANGE,
        payload: { field, value }
    };
};

export const login = () => {
    let state = store.getState();
    let url = "https://healthix.nbihosp.org/users/login/";

    return {
        type: USER_LOGIN,
        payload: axios.post(url, {username: state.user.username, password: state.user.password})
    };
};
