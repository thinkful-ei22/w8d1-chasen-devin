import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';

export function GuessForm(props){
  return (
    <form onSubmit={e => {
        e.preventDefault();
        props.dispatch(makeGuess(e.target.userGuess.value));
        e.target.userGuess.value= '';
    }}>  
      <input 
        type='number'
        name='userGuess'
        id='guess'
        className='text'
        min='1'
        max='100'
        placeholder='Enter Your Guess'
        required
      />
      <button
        type='submit'
        name='submit'
        id='guessButton'
        className='button'
      >Guess
      </button>
    </form>
  );
};

export default connect()(GuessForm);
       