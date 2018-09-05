import reducers from './reducers';
import { createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import axios from "axios"
import promise from "redux-promise-middleware";
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(
    reducers, middleware,
);

store.dispatch({
    type: "FETCH_POSTS",
    payload: axios.get('https://api.addictaf.com/posts/post/?limit=5&offset=2')
});

export default store;
