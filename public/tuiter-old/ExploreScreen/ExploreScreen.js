import PostSummaryList from "../PostSummaryList/PostSummaryList.js"

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col">
                    <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control rounded-pill wd-search-link" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1 wd-float-left">
                    <a href="#" class="wd-float-left wd-flex-cent"> <i class="fas fa-cog fa-2x" style="color: #299fd6"></i> </a>
                </div>
           </div>
           <ul class=" wd-nav-color nav navbar-expand-sm navbar-expand-md navbar-expand-xl navbar-expand-xxl nav-style mt-2">
                <li class="nav-item ">
                    <a class="nav-link wd-active" href="#">For&nbspyou</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">Trending</a> </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link nav-style" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="wd-card-style">
                <img src="images/Starship.jpeg" class="card-img-top wd-card-style" alt="..."></img>
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;



