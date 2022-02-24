import React from 'react';
import '../Styles/Head.css';
import '../Styles/Sidebar.css';
import menu from '../images/menu.png';
import logo from '../images/logo.png';
import search from '../images/search.png'
import voiceSearch from '../images/voice-search.png'
import upload from '../images/upload.png';
import more from '../images/more.png';
import notification  from '../images/notification.png';
import Aman from '../images/Aman.jpg';
import './Script';

export default function Head() {

  return (
      <div>
          <nav className='flex-div' >
              <div className='nav-left flex-div'>
                  <img src={menu} className='menu' ></img>
                  <img src={logo} className='logo'></img>
              </div>
              <div className='nav-middle flex-div'>
                  <div className='search-box flex-div'>
                      <input type={Text} placeholder='Search' />
                      <img className='search' src={search}></img>
                  </div>
                  <img className='mic-icon' src={voiceSearch}></img>
              </div>
              <div className='nav-right flex-div'>
                  <img src={upload}></img>
                  <img src={more}></img>
                  <img src={notification}></img>
                  <img src={Aman} className='user' style={{width:'35px'}} ></img>
              </div>
          </nav>
      </div>
  );
}
