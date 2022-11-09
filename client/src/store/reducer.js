import { SET_USER_SESSION, SET_TICKET_FORM } from './constants';

const initState = {
    user: {},
    loggedIn: false,
    ticketForm: {
        type: 'Return',
        passengers: 0,
        rank: 'Standard',
        source: '',
        destination: '',
        startDate: '',
        returnDate: '',
    },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                user: action.payload[0],
                loggedIn: action.payload[1],
            };
        case SET_TICKET_FORM:
            let ticketFormState = { ...state };
            ticketFormState.ticketForm[action.payload.key] = action.payload.value;
            return ticketFormState;
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
