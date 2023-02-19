const PostSummaryItem = (post) => {
    return(`
    <div class="row mt-0 wd-post">
        <div class="col-10 border-2 wd-post-left">
            <p class="wd-fg-color-dimgray small p-0 mb-0 mt-1 " style= "width: fit-content; border-left: #adb5bd"> ${post.topic}</p>
            <h6 class=" bold p-0 mb-0 bold mt-1 " style= "width: fit-content">
                ${post.userName}
                <i class="fas fa-check-circle"></i>
                <span class="wd-fg-color-dimgray small -bold "> - ${post.time}</span>
                <p class=" mt-1">${post.title}</p>
            </h6>
        </div>
        <div class="col wd-float-right wd-img-cont">
            <img class="img-thumbnail border-0 mt-2 wd-post-img" src="${post.image}"/>
        </div>
    </div>
    `);
   }
   export default PostSummaryItem;