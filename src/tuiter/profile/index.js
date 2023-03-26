import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

 return <>
    <img src={profile.bannerPicture} height="200px" width="100%"/><br/>
    <img className = "wd-profile-picture" src={profile.profilePicture}/>
    <Link to="/tuiter/edit-profile" className="wd-edit-profile-button">Edit Profile</Link>
    <br/>
    <h4 className="wd-profile-name"><b>{profile.firstName + " " + profile.lastName}</b></h4>
    <div className="wd-profile-handle">{profile.handle}</div>
    <p>{profile.bio}</p>
    <p className="wd-profile-info">
        <span><i className="bi bi-geo-alt"></i> {profile.location} </span>
        <span><i className="bi bi-balloon"></i> Born {profile.dateOfBirth} </span>
        <span><i className="bi bi-calendar2-week"></i> Joined {profile.dateJoined} </span>
    </p>
    <p className="wd-profile-stats">
        <span><b>{profile.followingCount}</b> Following </span>
        <span><b>{profile.followersCount}</b> Followers </span>
    </p>
    </>
};

export default ProfileComponent;