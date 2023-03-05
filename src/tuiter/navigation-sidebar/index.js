import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className={"list-group-item"}>
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home"
               className={`list-group-item list-group-item-action align-content-center ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill"></i>
                <text className="d-none d-xl-inline ms-1">Home</text>
            </Link>
            <Link to="/tuiter/explore"
               className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"></i>
                <text className="d-none d-xl-inline ms-1">Explore</text>
            </Link>
            <a href="#"
               className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                <i className="bi bi-bell-fill"></i>
                <text className="d-none d-xl-inline ms-1">Notifications</text>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                <i className="bi bi-envelope-fill"></i>
                <text className="d-none d-xl-inline ms-1">Messages</text>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmark-fill"></i>
                <text className="d-none d-xl-inline ms-1">Bookmarks</text>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-ul"></i>
                <text className="d-none d-xl-inline ms-1">Lists</text>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                <i className="bi bi-person-fill"></i>
                <text className="d-none d-xl-inline ms-1">Profile</text>
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i>
                <text className="d-none d-xl-inline ms-1">More</text>
            </a>
            <Link to="/" className="list-group-item">
                <i className="bi bi-calculator"></i>
                <text className="d-none d-xl-inline ms-1">Labs</text>
            </Link>
        </div>
    );
};
export default NavigationSidebar;