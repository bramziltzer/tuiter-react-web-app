const ImageFormat = (post) => {
    if (post.hasOwnProperty('pageURL') && post.pageURL.length > 0) {
        return(`
            <div class="card rounded-top rounded-4 bg-black border-light">
                <img src=${post.image} width="100%" class="card-img rounded-0 rounded-top border-bottom border-light"/>
                <div class="card-body">
                    <p class="wd-no-space card-title">${post.pageName}</p>
                    <p class="wd-no-space text-muted card-text">${post.pageTag}</p>
                    <p class="wd-no-space text-muted text-truncate">
                        <i class="fa-solid fa-link"></i>
                        <a href='#' class="stretched-link wd-link-unformat">${post.pageURL}</a>
                    </p>
                    
                </div>
            </div>
        `)
    } else {
        return(`
        <div class="bg-black border-light">
                <img src=${post.image} width="100%" class="card-img rounded"/>
        </div>
        `)
    }
}

const PostListItem = (post) => {
    return(`
    <li class="list-group-item bg-black">
        <div class="row">
            <!-- Avatar -->
            <div class="col-1 ps-2 me-4 me-md-3 me-xl-2">
                <img class="rounded-circle" width="48px" src=${post.avatarIcon}/>
            </div>
            
          
            <div class="col">
                <span class="wd-no-space fw-bold">
                    ${post.userName}<i class="fa-solid fa-circle-check ms-1"></i>
                    <text class="text-muted fw-normal">${post.handle}</text>
                    <text class="text-muted fw-normal">• ${post.time}</text>
                </span>
                <p class="wd-no-space pb-2">${post.tweet}</p>
                
                <!-- Image and article card -->
                ${ImageFormat(post)}
                
                <!-- Icons Bar -->
                <span class="wd-no-space text-muted row pt-2">
                    <div class="col" href="#">
                        <i class="fa-solid fa-comment"></i>
                        ${post.comments}
                    </div>
                    <div class="col" href="#">
                        <i class="fa-solid fa-retweet"></i>
                        ${post.retweets}
                    </div>
                    <div class="col" href="#">
                        <i class="fa-solid fa-heart"></i>
                        ${post.likes}
                    </div>
                    <div class="col" href="#">
                        <i class="fa-solid fa-upload"></i>
                    </div>
                </span>
            </div>
        </div>
    </li>
    
    `);
}
export default PostListItem;