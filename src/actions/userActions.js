import { USER_LOGIN } from './types';
import {PropTypes} from "prop-types";
import store from "../store";
import axios from "axios/index";


export const userLogin = (username, password) => {
    let thisStore = store.getState();
    let url = "https://healthix.nbihosp.org/users/login/";

    store.dispatch({
        type: "USER_LOGIN",
        payload: axios.post(url, {username: username, password: password})
    });
};
