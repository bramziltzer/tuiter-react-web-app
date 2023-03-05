import React from "react";
import PostItem from "./post-item";
import postArray from "./posts.json"
function PostList() {
    return (
        <ul class="list-group">
            {postArray.map(post => PostItem(post))}
        </ul>
    )}

export default PostList;