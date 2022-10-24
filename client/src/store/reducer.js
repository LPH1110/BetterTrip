import { SET_USER_SESSION } from './constants';

const initState = {
    user: {},
    loggedIn: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                user: action.payload[0],
                loggedIn: action.payload[1],
            };
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
