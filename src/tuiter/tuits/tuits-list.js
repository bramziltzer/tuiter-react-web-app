import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";


function TuitList() {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {tuits.map(post =>
                <li className="list-group-item" key={post._id}>
                    {TuitItem(post)}
                </li>)}
        </ul>
    )}

export default TuitList;