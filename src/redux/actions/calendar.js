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
    console.log(year, 'action')
    return {
        type: "GET_CURRENT_MONTH",
        payload: { month: MONTHS[month], monthId: month, year: year }
    }
}

export function getPreviousMonth(month) {
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month - 1], monthId: month - 1 }
    }
}

export function getNextMonth(month) {
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month + 1], monthId: month + 1 }
    }
}