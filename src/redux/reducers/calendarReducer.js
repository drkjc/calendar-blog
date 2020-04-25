export default function calendarReducer(
    state = {
        month: "",
        monthId: 0,
        loading: true
}, action) {
    switch (action.type) {
        case "LOADING":
            return Object.assign(
                {},
                state, {
                    loading: true
                }
            )
        case "GET_CURRENT_MONTH":
            return Object.assign(
                {}, 
                state, { 
                    month: action.payload.month,
                    monthId: action.payload.monthId,
                    loading: false }
                );
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
