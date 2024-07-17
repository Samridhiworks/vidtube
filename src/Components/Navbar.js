import React from "react";
import menu_icon from '../assets/menu.png';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import upload_icon from '../assets/upload.png';
import more_icon from '../assets/more.png';
import notification_icon  from '../assets/notification.png';
import profile_icon from '../assets/jack.png'



const Navbar = () =>{
    return(
        <nav className="flex-div">
            <div className="nav-left  flex-div">
                <img  className="menu-icon" src={menu_icon} alt="" />
                <img className="logo" src={logo} alt="" />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box">
                <input type="text" placeholder="Search" style={{fontSize: "18px",paddingLeft:"18px"}}/>
                <img src={search} alt="search-icon" style={{height: "19px",
    position: "relative",
    top: "3px"}}/>
                </div>
              
            </div>

            <div className="nav-right flex-div">
               <img src={upload_icon} alt="" /> 
               <img src={more_icon} alt="" /> 
               <img src={notification_icon} alt="" /> 
               <img src={profile_icon} className="user-icon" alt="" /> 

            </div>

        </nav>
    )
}

export default Navbar;