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
    } else {
        return(
        <div className=" border-light">
                <img src={`/images/${post.image}`} width="100%" className="card-img rounded"/>
        </div>
        )
    }
}

const PostListItem = (post) => {
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
                    <text className="text-muted fw-normal">@{post.handle}</text>
                    <text className="text-muted fw-normal">• {post.time}</text>
                    <a><i className="bi bi-three-dots float-end"></i></a>
                </span>
                <p className="wd-no-space pb-2">{post.tweet}</p>

                {ImageFormat(post)}
                
                <div className="text-muted row pt-2 ps-1">
                    <div className="col-3" href="#">
                        <i className="bi bi-chat-fill me-1"></i>
                        {post.comments}
                    </div>
                    <div className="col" href="#">
                        <i className="bi bi-arrow-left-right me-1"></i>
                        {post.retweets}
                    </div>
                    <div className="col" href="#">
                        <i className="bi bi-heart-fill me-1"></i>
                        {post.likes}
                    </div>
                    <div className="col" href="#">
                        <i className="bi bi-upload"></i>
                    </div>
                    {
                        post.isThread === true &&
                        <div className={"mt-4"}>
                            <a href="#" className="text-decoration-none">Show This Thread</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default PostListItem;