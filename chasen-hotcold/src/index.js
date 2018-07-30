import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
// import {makeGuess, resetGame, infoSection} from './actions';

// store.dispatch(makeGuess(50));
// console.log(store.getState());
// store.dispatch(resetGame());
// store.dispatch(infoSection());

// store.dispatch(makeGuess(50));

console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <Game />
</Provider>,
document.getElementById('root'));
registerServiceWorker();

