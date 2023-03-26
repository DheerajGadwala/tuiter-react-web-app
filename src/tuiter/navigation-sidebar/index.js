import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  const active = paths[2] == undefined || paths[2] == "" ? "home" : paths[2];
    return (
        <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <Link to="/tuiter" className={`list-group-item ${active === 'home'?'active':''}`}>
        Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
        Explore
        </Link>
        <Link to="/" className="list-group-item">
        Notifications
        </Link>
        <Link to="/" className="list-group-item">
        Messages
        </Link>
        <Link to="/" className="list-group-item">
        Bookmarks
        </Link>
        <Link to="/" className="list-group-item">
        Lists
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
        Profile
        </Link>
        <a className={`list-group-item ${active === 'more'?'active':''}`}>
          More
        </a>
      </div>
    );
};
export default NavigationSidebar;