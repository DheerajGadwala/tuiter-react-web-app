import React from "react";
const PostItem = (post) => {
    post = post.post
    var islargePost = post.title_2 == '';
    return(
        <div className="wd-section">
            <img src={`${post.image}`} className="wd-user-image"/>
            <div className="wd-tuit">
                <div className="wd-name-uname-date">
                    <div className="wd-name">{post.userName}</div>
                    <div><i className="fa-solid fa-circle-check wd-blue-check"></i></div>
                    <div className="wd-uname"> @{post.handle}</div>
                    <div className="wd-date"> . {post.time}</div>
                </div>
                <div className="wd-content">
                    {post.title_1}
                </div>
                <div className="wd-img-and-content">
                    <img src={`${post.image_post}`} className={`wd-post-pic ${islargePost?'wd-rounded-bottom':''}`}/>
                    {
                        !islargePost ? <div className="wd-img-content">
                    <div className="wd-img-heading">{post.title_2_heading}</div>
                        <div className="wd-img-text">{post.title_2}</div>
                    </div> : <></>
                    } 
                </div>
                <div className="wd-icons">
                    <a href="#"><i className="fa-regular fa-comment"></i><span>{post.comments}</span></a>
                    <a href="#"><i className='fa fa-retweet'></i><span>{post.shares}</span></a>
                    <a href="#"><i className='fa-regular fa-heart'></i><span>{post.likes}</span></a>
                    <a href="#"><i className='fa fa-share'></i></a>
                    <div></div>
                </div>
                <a className="wd-img-link" href=""><div>{post.title_2_link}</div></a>
            </div>
        </div>
        
    );
};
export default PostItem;