import React, {Component} from 'react';
import birdsArray from '../birds';
import Cards from './cards';

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_cards: 18,
      randomPhotos: []
    }
  }

  componentDidMount() {
    this.createCards();
  }


  createCards() {
    const photos = [...birdsArray, ...birdsArray];
    const {total_cards} = this.state;
    const randomizedCards = [];
    for(let i=0; i<total_cards; i++) {
        const randomPick = Math.floor(Math.random() * photos.length);
        randomizedCards.push(photos[randomPick]);
        photos.splice(randomPick, 1);
    }
    this.setState({
      randomPhotos: [...randomizedCards]
    })
  }



  render() {
    const cards = this.state.randomPhotos.map((card,index) => {
      return <Cards index={index}cardInfo={this.state}/>
    })
    return(
      <div id="game-area">
        {cards}
      </div>
    )
  }
}

export default Play;
