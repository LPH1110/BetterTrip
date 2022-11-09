import { SET_USER_SESSION, SET_TICKET_FORM } from './constants';

export const setUserSession = (...payload) => {
    return {
        type: SET_USER_SESSION,
        payload,
    };
};

export const setTicketForm = (key, value) => {
    return {
        type: SET_TICKET_FORM,
        payload: {
            key,
            value,
        },
    };
};
