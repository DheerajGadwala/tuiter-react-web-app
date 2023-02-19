const PostItem = (post) => {

    var islargePost = post.title_2 == '';

    return(`
        <div class="wd-section">
            <img src="${post.image}" class="wd-user-image"/>
            <div class="wd-tuit">
                <div class="wd-name-uname-date">
                    <div class="wd-name">${post.userName}</div>
                    <div class="wd-uname"> @${post.handle}</div>
                    <div class="wd-date"> . ${post.time}</div>
                </div>
                <div class="wd-content">
                    ${post.title_1}
                </div>
                <div class="wd-img-and-content">
                    <img src="${post.image_post}" class="wd-post-pic ${islargePost?'wd-rounded-bottom':''}"/>
                    ${
                        !islargePost ? `<div class="wd-img-content">
                    <div class="wd-img-heading">${post.title_2_heading}</div>
                        <div class="wd-img-text">${post.title_2}</div>
                        <a class="wd-img-link" href=""><i class='fa fa-link'></i><div>${post.title_2_link}</div></a>
                    </div>` : ``
                    } 
                </div>
                <div class="wd-icons">
                    <a href="#"><i class='fa fa-comment'></i><span>${post.comments}</span></a>
                    <a href="#"><i class='fa fa-retweet'></i><span>${post.shares}</span></a>
                    <a href="#"><i class='fa fa-heart'></i><span>${post.likes}</span></a>
                    <a href="#"><i class='fa fa-share'></i></a>
                    <div></div>
                </div>
            </div>
        </div>
    `);
   }
   export default PostItem;