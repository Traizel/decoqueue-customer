import { combineReducers } from 'redux';

const info = (state = 'login', action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    info,
});

export default rootReducer;
