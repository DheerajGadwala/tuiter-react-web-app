const NavigationSidebar = (active) => {
    return(`
        <div class="list-group d-xl-none">
            <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
            <a href="../home/index.html" class="list-group-item list-group-item-action wd-dark-mode ${active=='home'?'wd-selected':''}"><i class="fas fa-home"></i></a>
            <a href="../explore/index.html" class="list-group-item list-group-item-action wd-dark-mode ${active=='explore'?'wd-selected':''}" aria-current="true"> <i class="fas fa-hashtag"></i> </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='notifications'?'wd-selected':''}"><i class="fas fa-bell"></i> </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='messages'?'wd-selected':''}"><i class="fas fa-envelope"></i> </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='bookmarks'?'wd-selected':''}"><i class="fas fa-bookmark"></i>  </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='lists'?'wd-selected':''}"><i class="fas fa-list"></i>  </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='profile'?'wd-selected':''}"><i class="fas fa-user-alt"></i> </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='more'?'wd-selected':''}"><i class="fas fa-ellipsis-h"></i> </a> 
        </div>
        <div class="list-group d-none d-md-none d-sm-none d-lg-none d-xl-flex">
        <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
            <a href="../home/index.html" class="list-group-item list-group-item-action wd-dark-mode ${active=='home'?'wd-selected':''}"><i class="fas fa-home"></i> Home</a>
            <a href="../explore/index.html" class="list-group-item list-group-item-action wd-dark-mode fw-bolder ${active=='explore'?'wd-selected':''}" aria-current="true"> <i class="fas fa-hashtag" style="font-weight: bolder"></i> Explore</a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='notifications'?'wd-selected':''}"><i class="fas fa-bell"></i> Notifications</a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='messages'?'wd-selected':''}"><i class="fas fa-envelope"></i> Messages</a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='bookmarks'?'wd-selected':''}"><i class="fas fa-bookmark"></i>  Bookmarks</a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='lists'?'wd-selected':''}"><i class="fas fa-list"></i> Lists </a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='profile'?'wd-selected':''}"><i class="fas fa-user-alt"></i> Profile</a>
            <a href="#" class="list-group-item list-group-item-action wd-dark-mode ${active=='more'?'wd-selected':''}"><i class="fas fa-ellipsis-h"></i> More</a>  
        </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill px-2">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;