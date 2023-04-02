import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";

const ImageFormat = (post) => {
    if (post.hasOwnProperty('pageURL') && post.pageURL.length > 0) {
        return(
            <div className="card rounded-top rounded-4 border-light">
                <img src={`/images/${post.image}`} width="100%" className="card-img rounded-0 rounded-top border-bottom border-light"/>
                <div className="card-body">
                    <p className="wd-no-space card-title">{post.pageName}</p>
                    <p className="wd-no-space text-muted card-text">{post.pageTag}</p>
                    <p className="wd-no-space text-muted text-truncate">
                        <i className="bi bi-link-45deg"></i>
                        <a href='#' className="stretched-link wd-link-unformat">{post.pageURL}</a>
                    </p>

                </div>
            </div>
        )
    }
    //TODO remove this and add a new conditional to add in a post image not linked to shared url
    // else {
    //     return(
    //         <div className=" border-light">
    //             <img src={`/images/${post.image}`} width="100%" className="card-img rounded"/>
    //         </div>
    //     )
    // }
}

const TuitItem = (post) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (post) => {
        dispatch(deleteTuitThunk(post._id));
    }

    return(
            <div className="row">
                <div className="col-1 ps-2 me-4 me-md-3 me-xl-2">
                    <img className="rounded-circle" width="48px" src={`/images/${post.avatarIcon}`}/>
                </div>

                <div className="col">
                    {post.retweet === true &&
                        <div className={"text-muted fw-semibold"}>
                            <i className="bi bi-arrow-left-right me-1"></i>{post.retweetBy} Retweeted
                        </div>}
                    <span className="wd-no-space fw-bold">
                        {post.userName}<i className="bi bi-check-circle-fill ms-1 me-1 text-primary"></i>
                        <span className="text-muted fw-normal">{post.handle}</span>
                        <span className="text-muted fw-normal ms-1">• {post.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post)}></i>
                    </span>
                    <p className="wd-no-space pb-2">{post.tuit}</p>

                    {ImageFormat(post)}

                    <TuitStats post={post}/>

                </div>
            </div>

    );
}
export default TuitItem;