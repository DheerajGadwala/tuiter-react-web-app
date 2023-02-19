import PostList from "../PostList/PostList.js";

const HomeComponent = () => {
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
            ${PostList()}
    `);
}
export default HomeComponent;



