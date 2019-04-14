import React, {Component} from 'react';


class Cards extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {

    const {link} = this.props.cardInfo.randomPhotos[this.props.index];
    const imageName = require(`../${link}`)
    const {card_clicked, index} = this.props
    const {index_clicked} = this.props.cardInfo

    const card_front_style = {
      'backgroundImage': `url(${imageName}),  linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)`
    }
    const card_back_style = index_clicked.indexOf(index) >= 0 ? {display: 'none'} : {};
    return(
      <div onClick={() => {card_clicked(index)}}className="card">
        <div className="front" style={card_front_style}></div>
        <div style={card_back_style} className="back"></div>
      </div>
    )
  }

}

export default Cards;
