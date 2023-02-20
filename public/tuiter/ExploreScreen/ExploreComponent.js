import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
        <div class="row">
            <!-- Search Bar-->
            <div class="row mb-2 align-items-center">
                <div class="col-10 col-md">
                    <span><i class="fa-solid fa-magnifying-glass wd-search-icon ps-3 position-absolute"></i>
                    <input type="text" class="form-control rounded-pill ps-5" id="search" placeholder="Search Tuiter"/>
                    </span>
                </div>
            <div class="col-1"><a href="#"><i class="fa-solid fa-gear fa-2x text-primary"></i></a></div>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
        <!-- tabs -->
        <li class="nav-item" id="for-you">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
        </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative">
          <img src="../img/starship.jpg" class="card-img" alt="...">
          <div class="position-absolute wd-img-overlay fw-bold fs-2 text-white">SpaceX's Starship</div>
        </div>
        
        <!-- post summary -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
