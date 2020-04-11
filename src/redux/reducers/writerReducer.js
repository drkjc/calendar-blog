export default function writerReducer(
    state = {
        posts: []
}, action) {
    switch (action.type) {
        case "CREATE_POST":
            return {...state};
        default: 
            return state;
    }
}