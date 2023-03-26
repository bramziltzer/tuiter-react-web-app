import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

function TuitList() {
    const postArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {postArray.map(post =>
                <li className="list-group-item" key={post._id}>
                    {TuitItem(post)}
                </li>)}
        </ul>
    )}

export default TuitList;