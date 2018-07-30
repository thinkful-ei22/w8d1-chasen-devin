import React from 'react';
import {connect} from 'react-redux';

export function GuessCount(props){
  return (
    <h2 id='guessCount'>Guess #<span id='count'>{props.guesses.length+1}</span>!</h2>
  );
};



const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessCount);