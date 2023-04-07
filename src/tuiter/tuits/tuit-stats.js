import React from "react";
// import {toggleLike} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStat = (post) => {
    post = post.post;
    const dispatch = useDispatch();

    const toggleLikeHandler = (post) => {
        let newLikes = post.likes;
        if (post.liked)
            newLikes -= 1;
        else
            newLikes += 1;
        dispatch(updateTuitThunk({...post, liked: !post.liked, likes: newLikes}));
    }   
    const toggleDislikeHandler = (post) => {
        let newDislikes = post.dislikes;
        if (post.disliked)
            newDislikes -= 1;
        else
            newDislikes += 1;
        dispatch(updateTuitThunk({...post, disliked: !post.disliked, dislikes: newDislikes}));
    }   

    return(
        <div className="wd-icons">
            <a><i className="fa-regular fa-comment"></i><span>{post.replies}</span></a>
            <a><i className='fa fa-retweet'></i><span>{post.retuits}</span></a>
            <a onClick={()=>toggleLikeHandler(post)}>
            {
                post.liked ?
                <i className="bi bi-suit-heart-fill wd-red-heart"></i>
                :<i className="bi bi-suit-heart"></i>
            }
            <span>{post.likes}</span></a>
            <a onClick={()=>toggleDislikeHandler(post)}>
            {
                post.disliked ?
                <i className="bi bi-hand-thumbs-down-fill wd-black-dislike"></i>
                :<i className="bi bi-hand-thumbs-down"></i>
            }
            <span>{post.dislikes}</span></a>
            <a><i className='fa fa-share'></i></a>
            <div></div>
        </div>
        
    );
};
export default TuitStat;