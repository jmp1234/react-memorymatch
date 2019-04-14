import React, {Component} from 'react';
import '../birds.js';
import Stats from './stats';
import birdsArray from '../birds';
import Cards from './cards';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_cards: 18,
      randomPhotos: [],
      index_clicked: [],
      card_clicked: null
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



  card_clicked = (index) => {
    this.setState({
      index_clicked: [...this.state.index_clicked, index]
    })
  }



  render() {
    console.log('state: ', this.state)
    const cards = this.state.randomPhotos.map((card,index) => {
      return <Cards card_clicked={this.card_clicked}index={index}cardInfo={this.state}/>
    })
    return(
      <div className="game-space">
        <Stats />
        <div id="game-area">
          {cards}
        </div>
      </div>
    )
  }

}

export default Game;
