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
      indexes_clicked: [],
      first_card_clicked: null,
      second_card_clicked: null,
      wait_for_timeout: false,
      total_possible_matches: 9
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



  card_clicked = (card, index) => {
    if(!this.state.wait_for_timeout) {
      this.setState({
        indexes_clicked: [...this.state.indexes_clicked, index],
      })

      //ASSIGN FIRST CARD CLICKED
      if(this.state.first_card_clicked === null) {
        this.setState({
          indexes_clicked: [...this.state.indexes_clicked, index],
          first_card_clicked: card
        })
      }
      //ASSIGN SECOND CARD CLICKED
      else if (index !== this.state.indexes_clicked) {
        this.state.second_card_clicked = card;
        // this.stats.attempts++;
      }
    }
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
