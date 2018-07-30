
/*Actions  

guessAction
FeedbackAction
NewGameAction

infoAction
*/

export const MAKE_GUESS = 'MAKE_GUESS';
export const RESET_GAME = 'RESET_GAME';
export const INFO_SECTION = 'INFO_SECTION';

export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
})

export const resetGame = () => ({
  type: RESET_GAME
})

export const infoSection = () => ({
  type: INFO_SECTION
})