import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Video from './Video';

function Player({spotify}) {
  return (
    <div className="player">
      <div className='player_body'>
        <Sidebar />
        <Body spotify={spotify}/>
        {/*sidebar */}
        {/*body */}

      </div>
      <Footer spotify={spotify}/>
      {/*footer */}
    </div>
  )
}

export default Player