import React from 'react';
import '../Styles/Video.css'
import Head from './Head';
import video from '../images/video.mp4'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import share from '../images/share.png'
import save from '../images/save.png'
import Jack from '../images/Jack.png'
import thumbnail1 from '../images/thumbnail1.png'
import thumbnail2 from '../images/thumbnail2.png'
import thumbnail3 from '../images/thumbnail3.png'
import thumbnail4 from '../images/thumbnail4.png'
import thumbnail5 from '../images/thumbnail5.png'
import thumbnail6 from '../images/thumbnail6.png'
import thumbnail7 from '../images/thumbnail7.png'
import thumbnail8 from '../images/thumbnail8.png'

export default function Video() {
  return (
    <div>
      <Head />

      <div className='container play-container'>
        <div className='row'>
          <div className='play-video'>
            <video controls autoPlay>
              <source src={video} type='video/mp4' ></source>
            </video>
            <div className='tags'>
              <a href=''>#Coding #HTML #CSS #JavaScript </a>
            </div>
            <h3>Best YouTube channel To Learn Web Development</h3>
            <div className='play-video-info'>
              <p>1269 Views &bull; 2 days ago</p>
              <div>
                <a href='' ><img src={like} ></img>540</a>
                <a href='' ><img src={dislike} ></img>20</a>
                <a href='' ><img src={share} ></img>Share</a>
                <a href='' ><img src={save} ></img>Save</a>
              </div>
            </div>
            <hr></hr>
            <div className='publisher'>
              <img src={Jack}></img>
              <div>
                <p>Easy Tutorials</p>
                <span>978k Subscribers</span>
              </div>
              <button type='button'>Subscribe</button>
            </div>
            <div className='vid-description'>
              <p>Channel that make learing easy</p>
              <p>Subscribe Easy Tutorials to watch more tutorials on web development</p>
              <hr></hr>
              <h4>233 Comments</h4>
              
              <div className='add-comment'>
                <img src={Jack}></img>
                <input type={Text} placeholder='Write Comments...'></input>
              </div>
              <div className='old-comment'>
                <img src={Jack}></img>
                <div>
                  <h3>Jack Nicholson<span>2 days ago</span></h3>
                  <p>A global computer network providing a variety of information and
                     communiction facilities, consisting of interconnected 
                     networks using standardized communication protocols.</p>
                     <div className='acomment-action'>
                       <img src={like} ></img>
                       <span>244</span>
                       <img src={dislike} ></img>
                       <span>3</span>
                       <span>REPLY</span>
                       <a href=''>All Replies</a>
                     </div>

                </div>
              </div>
            </div>

          </div>
          <div className='right-sidebar'>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail1} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail2} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail3} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail4} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail5} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail6} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail7} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>

            <div className='side-video-list'>
              <a href='http://localhost:3000/video'><img src={thumbnail8} className='small-thumbnail' ></img></a>
              <div className='vid-info'>
                <div className='vid-info'>
                  <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                  <p>Easy Tutorials</p>
                  <p>15k Views &bull; 2 days</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}
