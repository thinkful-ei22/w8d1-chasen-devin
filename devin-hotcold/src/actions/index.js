export const RESTART_GAME = 'RESTART_GAME';

export const MAKE_GUESS = 'MAKE_GUESS';

export const UPDATE_AURAL_UPDATE='UPDATE_AURAL_UPDATE';

export const restartGame = () => ({
    type: RESTART_GAME
});

export const makeGuess = (feedback, guess) => ({
    type: MAKE_GUESS,
    feedback, guess
});

export const updateAuralUpdate = (auralStatus) => ({
    type: UPDATE_AURAL_UPDATE,
    auralStatus
});