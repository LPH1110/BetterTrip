import { SET_USER_SESSION } from './constants';

export const setUserSession = (...payload) => {
    return {
        type: SET_USER_SESSION,
        payload,
    };
};
