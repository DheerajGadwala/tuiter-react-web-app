import React from "react";
import {toggleLike} from "./tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStat = (post) => {
    post = post.post;
    const dispatch = useDispatch();

    const toggleLikeHandler = (post) => {
        dispatch(toggleLike(post));
        //console.log(post.liked);
    }   

    return(
        <div className="wd-icons">
            <a href="#"><i className="fa-regular fa-comment"></i><span>{post.replies}</span></a>
            <a href="#"><i className='fa fa-retweet'></i><span>{post.retuits}</span></a>
            <a href="#" onClick={()=>toggleLikeHandler(post)}>
            {
                post.liked ?
                <i className="bi bi-suit-heart-fill wd-red-heart"></i>
                :<i className="bi bi-suit-heart"></i>
            }
            <span>{post.likes}</span></a>
            <a href="#"><i className='fa fa-share'></i></a>
            <div></div>
        </div>
        
    );
};
export default TuitStat;