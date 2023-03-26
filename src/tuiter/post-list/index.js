import React from "react";
import PostItem from "./post-item";
import postArray from "../data/tuits.json"
function PostList() {
    return (
        <ul class="list-group">
            {postArray.map(post =>
                <li key={post._id}>
                    <PostItem post={post}/>
                </li>
            )}

        </ul>
    )}

export default PostList;