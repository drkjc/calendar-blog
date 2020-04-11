export function createPost(post) {
    console.log(post, "action")
    return {
        type: "CREATE_POST",
        payload: post
    }
}