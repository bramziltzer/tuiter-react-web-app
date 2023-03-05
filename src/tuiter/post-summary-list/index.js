import React from "react";
import PostSummaryItem from "./post-summary-item";
import postArray from "./summary-posts.json"

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {postArray.map(post =>
                <PostSummaryItem key={post._id} post={post}/>
            )}
        </ul>
    )};

export default PostSummaryList