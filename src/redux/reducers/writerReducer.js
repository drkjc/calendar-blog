export default function writerReducer(
    state = {
        posts: []
}, action) {
    switch (action.type) {
        case "CREATE_POST":
            return Object.assign(
                {}, 
                state, { 
                posts: [
                    ...state.posts,
                    action.payload
                ]
            });
        default: 
            return state;
    }
}

