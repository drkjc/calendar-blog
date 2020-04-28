export default function writerReducer(
    state = {
        posts: []
}, action) {
    console.log(action, 'writ reducer')
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

