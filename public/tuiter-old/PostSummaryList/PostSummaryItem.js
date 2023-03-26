const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-10 pe-2">
                  <p class="wd-no-space text-muted">${post.topic}</p>
                  <span class="wd-no-space fw-bold">
                    ${post.userName}<i class="fa-solid fa-circle-check ms-1"></i>
                    <text class="text-muted fw-normal">- ${post.time}</text>
                  </span>
                  <p class="wd-no-space fw-bold">${post.title}</p>
                  <p class="wd-no-space text-muted">
                    ${post.hasOwnProperty('tweets') ?  `${post.tweets} Tweets` : ''}
                  </p>
                </div>
                <div class="col-2">
                  <img class="rounded-3" width="100%" src=${post.image}/>
                </div>
              </div>
            </li>
    
    `);
}
export default PostSummaryItem;