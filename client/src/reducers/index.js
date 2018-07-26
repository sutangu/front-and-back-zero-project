import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReduser from './profileReducer';
import postReduser from './postReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReduser,
    post: postReduser
});