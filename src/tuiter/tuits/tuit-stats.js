import React from "react";
import {useDispatch} from "react-redux";
import {tuitLikeToggle} from "../reducers/tuits-reducer";
const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const LikeToggle = (post) => {
        dispatch(tuitLikeToggle(post))
    };
    return (
        <div className="text-muted row pt-2 ps-1">
            <div className="col-3" href="#">
                <i className="bi bi-chat me-1"></i>
                {post.replies}
            </div>
            <div className="col" href="#">
                <i className="bi bi-arrow-repeat me-1"></i>
                {post.retuits}
            </div>
            <div className="col" href="#">
                <button onClick={()=>LikeToggle(post)}
                    className={"bg-white border-0 text-muted wd-no-space"}>
                    {post.liked && <i className="bi bi-heart-fill wd-red-fill me-1"></i>}
                    {!post.liked && <i className="bi bi-heart me-1"></i>}
                </button>
                {post.likes}
            </div>
            <div className="col" href="#">
                <i className="bi bi-upload"></i>
            </div>
        </div>
    )
}

export default TuitStats