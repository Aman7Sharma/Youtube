import React from 'react';
import '../Styles/Main.css';
import banner from '../images/banner.png'
import thumbnail1 from '../images/thumbnail1.png'
import thumbnail2 from '../images/thumbnail2.png'
import thumbnail3 from '../images/thumbnail3.png'
import thumbnail4 from '../images/thumbnail4.png'
import thumbnail5 from '../images/thumbnail5.png'
import thumbnail6 from '../images/thumbnail6.png'
import thumbnail7 from '../images/thumbnail7.png'
import thumbnail8 from '../images/thumbnail8.png'
import Jack from '../images/Jack.png'
import Aman from '../images/Aman.jpg';
import cameron from '../images/cameron.png'
import gerard from '../images/gerard.png'
import megan from '../images/megan.png'
import simon from '../images/simon.png'
import tom from '../images/tom.png'

export default function main() {
  return (
      <div>
          <div className='container' >
              <div className='banner' >
                  <img src={banner} ></img>
              </div>
              <div className='list-container'>
                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail1} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={Jack} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>15k Views &bull; 2 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail2} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={cameron} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>215k Views &bull; 20 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail3} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={gerard} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>135k Views &bull; 21 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail4} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={megan} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>105k Views &bull; 12 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail5} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={simon} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>195k Views &bull; 29 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail6} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={tom} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>99k Views &bull; 15 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail7} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={Aman} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>54k Views &bull; 6 days</p>
                          </div>
                      </div>   
                  </div>

                  <div className='vid-list'>
                      <a href='http://localhost:3000/video'><img src={thumbnail8} className='thumbnail' ></img></a>
                      <div className='flex-div'>
                          <img src={simon} ></img>
                          <div className='vid-info'>
                              <a href='http://localhost:3000/video'>Best channel to learn coding that help you to be a web developer</a>
                              <p>Easy Tutorials</p>
                              <p>60k Views &bull; 3 days</p>
                          </div>
                      </div>   
                  </div>


              </div>
          </div>
      </div>
  );
}
