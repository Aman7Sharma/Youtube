import React from 'react';
import "../Styles/Sidebar.css";
import home from '../images/home.png';
import explore from '../images/explore.png';
import subscriprion from '../images/subscriprion.png';
import library from '../images/library.png';
import history from '../images/history.png';
import playlist from '../images/playlist.png';
import messages from '../images/messages.png';
import showMore from '../images/show-more.png';
import jack from '../images/Jack.png';
import simon from '../images/simon.png';
import tom from '../images/tom.png';
import megan from '../images/megan.png';
import cameron from '../images/cameron.png';
import './Script';

export default function Sidebar() {

    // var sidebar = document.querySelector(".sidebar");

    


  return (
      <div>
          <div className='sidebar' >
              <div className='shortcut-links'>
                  <a href='' ><img src={home} ></img><p>Home</p></a>
                  <a href='' ><img src={explore} ></img><p>Explore</p></a>
                  <a href='' ><img src={subscriprion} ></img><p>Subscription</p></a>
                  <a href='' ><img src={library} ></img><p>Library</p></a>
                  <a href='' ><img src={history} ></img><p>History</p></a>
                  <a href='' ><img src={playlist} ></img><p>Playlist</p></a>
                  <a href='' ><img src={messages} ></img><p>Messages</p></a>
                  <a href='' ><img src={showMore} ></img><p>Show More</p></a>
                  <hr/>
              </div>
             
             <div className='subscribed-list'>
                 <h3>SUBSCRIBED</h3>
                 <a href='' ><img src={jack} ></img>Jack Nicholson</a>
                 <a href='' ><img src={simon} ></img>Simon Baker</a>
                 <a href='' ><img src={tom} ></img>Tom Hardy</a>
                 <a href='' ><img src={megan} ></img>Megan Ryan</a>
                 <a href='' ><img src={cameron} ></img>Cameron Diaz</a>
             </div> 

          </div>
      </div>
  );
}
