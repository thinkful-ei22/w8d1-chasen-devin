import React, { Component } from 'react';

import Header from './header';
import GuessBox from './guess-box';

export default class Game extends Component {    
  render() {
    return (
      <div>
        <Header />
        <main role='main'>
          <div className='game'>
            <GuessBox />
          </div>
        </main>
      </div>
      
    )
  }
}




