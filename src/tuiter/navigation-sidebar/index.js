import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2] === ""? "home": paths[2]; // if empty, make it home
    return (
        <div className="list-group">
            <a className={"list-group-item"}>
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home"
               className={`list-group-item list-group-item-action align-content-center ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill"></i>
                <div className="d-none d-xl-inline ms-1">Home</div>
            </Link>
            <Link to="/tuiter/explore"
               className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"></i>
                <div className="d-none d-xl-inline ms-1">Explore</div>
            </Link>
            <a href="#"
               className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                <i className="bi bi-bell-fill"></i>
                <div className="d-none d-xl-inline ms-1">Notifications</div>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                <i className="bi bi-envelope-fill"></i>
                <div className="d-none d-xl-inline ms-1">Messages</div>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmark-fill"></i>
                <div className="d-none d-xl-inline ms-1">Bookmarks</div>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-ul"></i>
                <div className="d-none d-xl-inline ms-1">Lists</div>
            </a>
            <Link to="/tuiter/profile"
                  className= {`list-group-item list-group-item-action
                               ${active === 'profile' || active === 'edit-profile'? 'active' : ''}`}>
                <i className="bi bi-person-fill"></i>
                <div className="d-none d-xl-inline ms-1">Profile</div>
            </Link>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i>
                <div className="d-none d-xl-inline ms-1">More</div>
            </a>
            <Link to="/" className="list-group-item">
                <i className="bi bi-calculator"></i>
                <div className="d-none d-xl-inline ms-1">Labs</div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;