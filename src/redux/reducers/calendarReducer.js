export default function calendarReducer(
    state = {
        month: ""
}, action) {
    switch (action.type) {
        case "GET_CURRENT_MONTH":
            return Object.assign(
                {}, 
                state, { 
                month: action.payload
            });
        case "GET_PREVIOUS_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload
                });
        case "GET_NEXT_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload
                });
        default: 
            return state;
    }
}