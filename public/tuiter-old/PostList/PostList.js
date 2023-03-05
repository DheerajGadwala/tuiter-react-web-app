import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
        <div class="wd-posts">
        ${
            posts.map(post => {
               return(PostItem(post));
            }).join('')
        }
        </div>
    `);
 }
 export default PostList;