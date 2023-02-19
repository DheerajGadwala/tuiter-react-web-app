import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
    return(`
    <ul class="list-group wd-dark-mode p=0">
        <li class="list-group-item p=0 wd-grey-mode">
            <h6 class="pt-1 pb-0 mb-0 fw-bolder" style="font-size: larger">Who to follow</h6>
        </li>
        ${
            whos.map(who => {
               return(WhoToFollowListItem(who));
            }).join('')
        }
    </ul>
    `);
 }
 export default WhoToFollowList;