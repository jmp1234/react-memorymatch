import React, {Component} from 'react';
import '../birds.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createCards();
  }

  createCards = () => {
    console.log('hello')
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default Game;
