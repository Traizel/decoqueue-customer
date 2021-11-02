import { combineReducers } from 'redux';

const loginMode = (state = 'login', action) => {
    switch (action.type) {
        case 'SET_TO_LOGIN_MODE':
            return 'login';
        case 'SET_TO_REGISTER_MODE':
            return 'register';
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    loginMode,
});

export default rootReducer;
