const MONTHS = [
'January', 
'February', 
'March', 
'April',
'May', 
'June', 
'July', 
'August', 
'September', 
'October', 
'November', 
'December'
]

export function getCurrentMonth(month, year) {
    return {
        type: "GET_CURRENT_MONTH",
        payload: { month: MONTHS[month], monthId: month, year: year }
    }
}

export function getPreviousMonth(month, year) {
    if (month === 0) {
        month = 12
        year--
    }
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month - 1], monthId: month - 1, year: year }
    }
}

export function getNextMonth(month, year) {
    if(month === 11) {
        month = -1 
        year++
    }
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month + 1], monthId: month + 1, year: year }
    }
}