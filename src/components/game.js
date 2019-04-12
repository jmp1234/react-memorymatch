import React, {Component} from 'react';
import '../birds.js';
import Stats from './stats';
import Play from './play';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="game-space">
        <Stats />
        <Play />
      </div>
    )
  }
}

export default Game;
