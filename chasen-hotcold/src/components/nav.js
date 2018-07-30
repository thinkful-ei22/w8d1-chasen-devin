import React from 'react';
import {connect} from 'react-redux';
import {resetGame, infoSection} from '../actions';

export function Nav(props){
  return (
    <nav> 
      <ul>
        <li><a href='#what' className='what' onClick={() => props.dispatch(infoSection())}>What?</a></li>
        <li><a href='' className='new' onClick={() => props.dispatch(resetGame())}>+New Game</a></li>
      </ul>
    </nav>
  )
}


export default connect()(Nav);