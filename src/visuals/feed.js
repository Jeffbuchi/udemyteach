import React, { useState } from "react";
import logo from '../udemylogo/logo-coral.svg';
import { NavLink} from "react-router-dom";
function Feed() {
    const [nav, setNav] = useState([
        
        {label : "Home", slug: "/", icon: "icon-home "},
        {label : "Videos", slug: "videopage", icon: "icon-home "},
        {label : "Images", slug: "imgur", icon: "icon-home "}
        
    ])

    

    var navigation = [];
    for (let i = 0; i < nav.length; i++) {
        navigation.push(
            <li key = {"nav-" + i + "-" + nav[i].slug}>
            <NavLink to = {nav[i].slug} className = {"align link noul flex grey "}>
                <div className = {"ico s24 "  +  nav[i].icon} />
                <h2 className = "lbl s24">{nav[i].label}</h2>
            </NavLink>
        </li>
        )
    }
    return (
        <div className = "feed fixed">
            <a href = "#" className = "logo block">
                <img src = {logo} className ="block" />
            </a>

            

            <ul className = "nav">
               {navigation}
            </ul>

            <div className = "updated-course flex align">
                <div className = "icon-lamp-bright ico" />
                <div className = "lbl s13 fontb black">
                    Updated Courses
                    <h2 className = "author s13 grey">by Udemy</h2>
                </div>
            </div>

            <div className = "me flex align">
                <div className = "photo grey s24"/>
                <img src = "https://placeimg.com/100/100/tech" className = "block"/>
                <div className = "lbl s13 fontb black">
                  Udemy
                   <h2 className = "handle s13 grey">@udemyofficial</h2>
                </div>
                </div>
            
            
        </div>
    )
}

export default Feed;