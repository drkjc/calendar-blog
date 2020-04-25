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
    console.log(MONTHS[month])
    return {
        type: "GET_CURRENT_MONTH",
        payload: month
    }
}