import React from "react";
import PlayVideo from "./PlayVideo";
import Recommended from "./Recommended";

const Video = ()=>{
    return(
        <div className="play-container">
            <PlayVideo/>    
            <Recommended/>
        </div>
    )

}

export default Video;