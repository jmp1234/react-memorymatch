import React, {Component} from 'react';


class Cards extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {

    const {link} = this.props.cardInfo.randomPhotos[this.props.index];
    const imageName = require(`../${link}`)

    const card_front_style = {
      'backgroundImage': `url(${imageName}),  linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)`

    }
    return(
      <div className="card">
        <div className="front" style={card_front_style}></div>
        {/* <div className="back"></div> */}
      </div>
    )
  }

}

export default Cards;
