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

export function getCurrentMonth(month) {
    return {
        type: "GET_CURRENT_MONTH",
        payload: { month: MONTHS[month], monthId: month }
    }
}

export function getPreviousMonth(month) {
    let indexOfCurrentMonth = MONTHS.indexOf(month)
    let previousMonth = MONTHS[indexOfCurrentMonth - 1]
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month - 1], monthId: month - 1 }
    }
}

export function getNextMonth(month) {
    let indexOfCurrentMonth = MONTHS.indexOf(month)
    let nextMonth = MONTHS[indexOfCurrentMonth + 1]
    return {
        type: "GET_PREVIOUS_MONTH",
        payload: { month: MONTHS[month + 1], monthId: month + 1 }
    }
}