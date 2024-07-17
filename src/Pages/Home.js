import React from "react";
import './Home.css';
import Sidebar from '../Components/Sidebar';
import Video from "../Components/Video";
import Feed from "../Components/Feed";

const Home = ()=>{
    return(
        <div>
              
               <Feed />
            <Sidebar />
         
        </div>
    )
}

export default Home;
