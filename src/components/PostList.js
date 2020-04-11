import React from 'react';

function renderPosts(posts) {
    return posts.map(post => {
        return <div key={post.id}>{post.title}</div>
    })
}

export default function PostList({ posts }) {
    return <div>{renderPosts(posts)}</div>
}
