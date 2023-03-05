const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item mr-2 wd-grey-mode">
            <div class="wd-row">
                <div class="wd-image-size-company pt-0 pb-0">
                    <img class="wd-rounded-corners-all-around img-thumbnail border-0 " src="${who.avatarIcon}"/>
                </div>
                <div class="col-xxl-2 pb-0 mb-0 wd-float-left wd-who-to-follow ">
                    <h6 class="pb-0 pt-0 mb-0 wd-font-weight px-2 wd-row2" style="width: fit-content">
                        ${who.userName} 
                        <i class="fas fa-check-circle"></i> 
                    </h6>
                    <div class = "row mt-0 pt-0 pb-0 m-0 wd-grey-tags small px-2">
                        @${who.handle}
                    </div>
                </div>
                <div class = "wd-float-right mt-auto mb-auto p-0 wd-follow">
                    <button class="btn btn-primary btn-sm text-black bg-light border-dark fw-bold rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
   }
   export default WhoToFollowListItem;