import React, { Component } from 'react';
import Game from './components/game';
import Header from './components/header';


class App extends Component {



  render() {
    return (
      <div>
        <Header />
        {/* {stats} */}
        <Game />
      </div>
    );
  }
}

export default App;
