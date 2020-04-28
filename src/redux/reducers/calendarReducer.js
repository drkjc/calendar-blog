export default function calendarReducer(
    state = {
        month: "",
        monthId: 0,
        year: 0,
        loading: true
}, action) {
    console.log(action, 'reducer')
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
                    year: action.payload.year,
                    loading: false }
                );
        case "GET_PREVIOUS_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload.month,
                    monthId: action.payload.monthId,
                    year: action.payload.year
                });
        case "GET_NEXT_MONTH":
            return Object.assign(
                {},
                state, {
                    month: action.payload.month,
                    monthId: action.payload.monthId,
                    year: action.payload.year
                });
        default: 
            return state;
    }
}
