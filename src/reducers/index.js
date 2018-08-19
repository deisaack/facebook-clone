import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import PostsReducer from './postReducer'


export default combineReducers({
  user: UserReducer,
  posts: PostsReducer
})
