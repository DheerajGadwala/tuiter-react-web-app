import React from "react";
import TuitStat from "./tuit-stats";
import {useDispatch} from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (post) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }
    

    post = post.post;
    return(
        <div className="wd-section">
            <img src={`${post.image}`} className="wd-user-image"/>
            <div className="wd-tuit">
                <div className="wd-name-uname-date">
                    <div className="wd-name">{post.userName}</div>
                    <div><i className="fa-solid fa-circle-check wd-blue-check"></i></div>
                    <div className="wd-uname"> {post.handle}</div>
                    <div className="wd-date"> . {post.time}</div>
                    <i className="bi bi-x-lg position-absolute wd-close-right" onClick={() => deleteTuitHandler(post._id)}></i>
                </div>
                <div className="wd-content">
                    {post.tuit}
                </div>
                <TuitStat key={post._id} post={post}/>
                {/* <div className="wd-icons">
                    <a href="#"><i className="fa-regular fa-comment"></i><span>{post.replies}</span></a>
                    <a href="#"><i className='fa fa-retweet'></i><span>{post.retuits}</span></a>
                    <a href="#" onClick={()=>toggleLikeHandler(post)}><i className={(post.liked ? 'fa-regular ' : 'fa ') + 'fa-heart'}></i><span>{post.likes}</span></a>
                    <a href="#"><i className='fa fa-share'></i></a>
                    <div></div>
                </div> */}
            </div>
        </div>
        
    );
};
export default TuitItem;