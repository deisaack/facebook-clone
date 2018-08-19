import { USER_LOGIN, USER_LOGIN_PENDING, USER_LOGIN_FULFILLED, USER_LOGIN_REJECTED } from "../actions/types";


const initialState = {
    username: "kipkemei",
    email: "deisaack@gmail.com",
    password: 'Foo',
    phone: '0721732519',
    firstName: 'Kipkemei',
    lastName: 'Isaac',
    image: 'http://icons.iconarchive.com/icons/artua/dragon-soft/512/User-icon.png',
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
                ...state, token: data.token, loading: false, id: data.id,
                image: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
            };
        case USER_LOGIN_REJECTED:
            return {...state, loading: false, error: action.payload.message};
        default:
            return state;
    }
}
