import React from 'react';

function renderPosts(posts) {
    if(posts.length) {
        return posts.map(post => {
            debugger;
            return <div key={post.id}>{post.title}</div>
        })
    } else {
        return "create a post"
    }
}

export default function PostList({ posts }) {

    return <div>{renderPosts(posts)}</div>
}