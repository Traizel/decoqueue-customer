import { combineReducers } from 'redux';

const loginMode = (state = 'login', action) => {
    switch (action.type) {
        case 'LOGIN':
            return 'login';
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    loginMode,
});

export default rootReducer;
