import React, {Component} from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="stats-container">
        <div>
          <div className="games-played">
            <div className="label">Games Played:</div>
            <div className="value"></div>
          </div>
          <div className="attempts">
            <div className="label">Attempts:</div>
            <div className="value"></div>
          </div>
          <div className="accuracy">
          <div className="label">Accuracy:</div>
          <div className="value"></div>
        </div>
        <div className="description">
          <div className="label">Description:</div>
          <div className="value"></div>
          <div className="fun-fact"></div>
        </div>
        <button className="reset-button"type="button" name="button">Reset Game</button>
        <div className="highest-accuracy"></div>
      </div>
    </div>
    )
  }
}

export default Stats;
