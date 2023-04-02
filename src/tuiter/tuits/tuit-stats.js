import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

    return (
        <div className="text-muted d-flex justify-content-start pt-2">
            <div className="me-4" href="#">
                <i className="bi bi-chat me-1"></i>
                {post.replies}
            </div>
            <div className="me-4" href="#">
                <i className="bi bi-arrow-repeat me-1"></i>
                {post.retuits}
            </div>
            <div className="me-4" href="#">
                <span>
                    Likes: {post.likes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))} className="bi bi-heart-fill ms-2 me-2 text-danger"></i>
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes - 1
                    }))} className="bi bi-hand-thumbs-down-fill text-black"></i>
                </span>
            </div>
            <div className="" href="#">
                <i className="bi bi-upload"></i>
            </div>
        </div>
    )
}

export default TuitStats