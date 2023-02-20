const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action align-content-center ${active === 'home' ? 'active' : ''}">
        <i class="fa-solid fa-house-chimney fa-fw"></i><text class="d-none d-xl-inline ms-1">Home</text></a>
     <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
         <i class="fa-solid fa-hashtag fa-fw"></i><text class="d-none d-xl-inline ms-1">Explore</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}">
          <i class="fa-solid fa-bell fa-fw"></i><text class="d-none d-xl-inline ms-1">Notifications</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}">
          <i class="fa-solid fa-envelope fa-fw"></i><text class="d-none d-xl-inline ms-1">Messages</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}">
          <i class="fa-solid fa-bookmark fa-fw"></i><text class="d-none d-xl-inline ms-1">Bookmarks</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}">
          <i class="fa-solid fa-list fa-fw"></i><text class="d-none d-xl-inline ms-1">Lists</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}">
          <i class="fa-solid fa-user fa-fw"></i><text class="d-none d-xl-inline ms-1">Profile</text></a>
     <a href="#" class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}">
     <span class="fa-stack wd-stack-normal">
            <i class="fa-solid fa-circle fa-stack-1x wd-stack-element-normal"></i>
            <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse wd-stack-element-normal"></i>
     </span><text class="d-none d-xl-inline ms-1">More</text></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;