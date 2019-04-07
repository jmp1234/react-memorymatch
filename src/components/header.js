import React from 'react';
import logo from '../images/bird.png';

export default () => {
  return(
    <header className="game-header">
      <div className="logo"><img src={logo} /></div>
      <div className="title"><h1>Match The Birds</h1></div>
      <div className="settings">
        <a href="#"><i className="fa fa-cog fa-fw"></i></a>
      </div>
      <div className="about">
        <a href="#" target="_blank"><i className="fa fa-question fa-fw"></i></a>
      </div>
    </header>
  )
}
