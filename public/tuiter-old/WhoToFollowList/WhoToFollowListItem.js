const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item wd-no-space pe-lg-4 pe-xl-0">
        <div class="row align-items-center">
          <div class="col-lg-2 col-2 ms-xl-3 m-2 ms-1 me-3 me-xl-0">
            <img class="rounded-circle" width="48px" src=${who.avatarIcon}/>
          </div>
          <div class="col-lg-6 col-xl-6 m-1 me-0 p-0">
            <span class="fw-bold wd-no-space">${who.userName}<i class="fa-solid fa-circle-check ms-1"></i></span>
            <p class="wd-no-space">@${who.handle}</p>
          </div>
          <div class="col-2 m-0 p-0">
            <button type="button" class="btn btn-primary rounded-pill">Follow</button>
          </div>
        </div>
      </li>
    `);
}
export default WhoToFollowListItem;

