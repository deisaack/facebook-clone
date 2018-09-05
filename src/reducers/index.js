import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import PostsReducer from './postReducer';
import DeviceReducer from "./deviceReducer";


export default combineReducers({
  user: UserReducer,
  posts: PostsReducer,
  device: DeviceReducer
})
