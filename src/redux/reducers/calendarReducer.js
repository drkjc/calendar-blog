export default function calendarReducer(
    state = {
        month: ""
}, action) {
    debugger;
    switch (action.type) {
        case "GET_CURRENT_MONTH":
            return Object.assign(
                {}, 
                state, { 
                month: action.payload.month,
                monthId: action.payload.monthId
            });
        case "GET_PREVIOUS_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload.month,
                    monthId: action.payload.monthId
                });
        case "GET_NEXT_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload.month,
                    monthId: action.payload.monthId
                });
        default: 
            return state;
    }
}
