import axios from "axios";
import store from "../store";

export const fetchPosts = () =>{
    let thisStore = store.getState();
    let url = thisStore.posts.nextPage !== undefined ? thisStore.posts.nextPage : "https://api.addictaf.com/posts/post/";
    store.dispatch({
        type: "FETCH_POSTS",
        payload: axios.get(url)
    });
};
