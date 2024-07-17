import React from 'react'
import Video1 from '../assets/video.mp4';
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from  '../assets/save.png'
import jack from '../assets/jack.png'
import user from '../assets/user_profile.jpg';


const PlayVideo =()=>{
    return(
        <div className='play-video'>
            <video src={Video1} controls autoPlay muted></video>
            <h3>Best Youtube Channel To Learn Web Development</h3>
            <div className='play-video-info'>
                <p>1525 Views &bull; 2 days ago</p>
           <div>
            <span><img src={like} />125</span>
            <span><img src={dislike} />2</span>
            <span><img src={share} />Share </span>
            <span><img src={save} />Save</span>
            </div>
            </div>
            <hr/>
            <div className='publisher'>
                <img src={jack} />
           <div>
            <p>Coding stack</p>
            <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>Channels that make learning Easy</p>
                <p>Subscribe Coding Stack to Watch More Tutorials on Web Development</p>
                <hr/>
                <h4>130 Comments</h4>
                <div className='comment'>
                    <img src={user} />
                
                <h3>Jack Nicholson<span>1 day ago</span></h3>
                </div>
                <p>A global Computer network providing a variety of information and cc of interconnected networks using standardized communication protocols.</p>
               
                <div className='comment-action'>
                    <img src={like} />
                    <span>244</span>
                    <img src={dislike}/>
                </div>
            </div>

            <div className='vid-description'>
                <p>Channels that make learning Easy</p>
                <p>Subscribe Coding Stack to Watch More Tutorials on Web Development</p>
                <hr/>
                <h4>130 Comments</h4>
                <div className='comment'>
                    <img src={user} />
                
                <h3>Jack Nicholson<span>1 day ago</span></h3>
                </div>
                <p>A global Computer network providing a variety of information and cc of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={like} />
                    <span>244</span>
                    <img src={dislike}/>
                </div>
            </div>

            <div className='vid-description'>
                <p>Channels that make learning Easy</p>
                <p>Subscribe Coding Stack to Watch More Tutorials on Web Development</p>
                <hr/>
                <h4>130 Comments</h4>
                <div className='comment'>
                    <img src={user} />
               
                <h3>Jack Nicholson<span>1 day ago</span></h3>
                </div>
                <p>A global Computer network providing a variety of information and cc of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={like} />
                    <span>244</span>
                    <img src={dislike}/>
                </div>
            </div>

            <div className='vid-description'>
                <p>Channels that make learning Easy</p>
                <p>Subscribe Coding Stack to Watch More Tutorials on Web Development</p>
                <hr/>
                <h4>130 Comments</h4>
                <div className='comment'>
                    <img src={user} />
                
                <h3>Jack Nicholson<span>1 day ago</span></h3>
                </div>
                <p>A global Computer network providing a variety of information and cc of interconnected networks using standardized communication protocols.</p>
                <div className='comment-action'>
                    <img src={like} />
                    <span>244</span>
                    <img src={dislike}/>
                </div>
            </div>
        </div>


        
    )
}
export default PlayVideo;