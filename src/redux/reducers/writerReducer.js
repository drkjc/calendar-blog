export default function writerReducer(
    state = {
        posts: []
}, action) {
    switch (action.type) {
        case "CREATE_POST":
            //debugger;
            return Object.assign(
                {}, 
                state, { 
                posts: [
                    action.payload
                ]
            });
        default: 
            return state;
    }
}

