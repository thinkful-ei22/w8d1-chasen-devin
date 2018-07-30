import React from 'react';

import './guess-count.css';

import {connect} from 'react-redux';

export function GuessCount(props) {
    const guessCount = props.guesses.length;
    const isPlural = guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{guessCount}</span> {guessNoun}!
        </h2>
    );
}


GuessCount.defaultProps = {
    guesses: []
};

export const mapStateToProps = state => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(GuessCount);