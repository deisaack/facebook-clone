import { USER_LOGIN, USER_LOGIN_PENDING, USER_LOGIN_FULFILLED, USER_LOGIN_REJECTED, LOGIN_INPUT_CHANGE } from "../actions/types";
import {Toast} from "native-base";


const initialState = {
    username: "kipkemei",
    email: "deisaack@gmail.com",
    password: 'Foo',
    phone: '0721732519',
    firstName: 'Kipkemei',
    lastName: 'Isaac',
    image: "https://pbs.twimg.com/profile_images/621602980115128320/uFgXZi31_400x400.jpg",
    loggedIn: false,
    id: undefined,
    token: '',
    loading: false,
    error: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return {...state, loading: true};
        case USER_LOGIN_FULFILLED:
            let data = action.payload.data;
            return {
                ...state, token: data.token, loading: false, id: data.id, loggedIn: true,
                image: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            };
        case USER_LOGIN_REJECTED:
            Toast.show({
                text: action.payload.message,
                buttonText: 'Okay',
                type: "danger",
                duration: 4000
            });
            return {...state, loading: false, error: action.payload.message};
        case LOGIN_INPUT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.value };
        default:
            return state;
    }
}
