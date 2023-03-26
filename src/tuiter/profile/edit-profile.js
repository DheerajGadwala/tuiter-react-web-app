import React, {useState} from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { updateProfile } from "./profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    let navigate = useNavigate(); 
    let [localProfile, setLocalProfile] = useState(profile);
    const saveHandler = () => {
        dispatch(updateProfile(localProfile));
        navigate('/tuiter/profile');
     }
 return <>
        <div className="wd-edit-profile-heading">
            <div>
                <Link to="/tuiter/profile"><i className="bi bi-x-lg"></i></Link>
                <p>Edit Profile</p>
            </div>
            <div onClick={saveHandler} className="wd-save-profile-button">Save</div>
        </div>
    <img src={localProfile.bannerPicture} height="200px" width="100%"/><br/>
    <img className = "wd-profile-picture" src={localProfile.profilePicture}/>
    <br/>
    <div className="wd-edits">
    <div className="wd-edit-profile-input">
        <label htmlFor="fname">First Name</label>
        <textarea id="fname" value={localProfile.firstName} placeholder="First Name" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, firstName: event.target.value})}></textarea>
    </div>
    <div className="wd-edit-profile-input">
        <label htmlFor="lname">Last Name</label>
        <textarea id="lname" value={localProfile.lastName} placeholder="Last Name" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, lastName: event.target.value})}></textarea>
    </div>
    <div className="wd-edit-profile-input">
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" value={localProfile.bio} placeholder="Bio" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, bio: event.target.value})}></textarea>
    </div>
    <div className="wd-edit-profile-input">
        <label htmlFor="location">Location</label>
        <textarea id="location" value={localProfile.location} placeholder="Location" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, location: event.target.value})}></textarea>
    </div>
    <div className="wd-edit-profile-input">
        <label htmlFor="website">Website</label>
        <textarea id="website" value={localProfile.website} placeholder="Website" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, website: event.target.value})}></textarea>
    </div>
    <div className="wd-edit-profile-input">
        <label htmlFor="dateOfBirth">Date Of birth</label>
        <textarea id="dateOfBirth" value={localProfile.dateOfBirth} placeholder="Date Of Birth" className="form-control border-0" onChange={(event) => setLocalProfile({...profile, dateOfBirth: event.target.value})}></textarea>
    </div>
    </div>
    </>
};

export default EditProfileComponent;