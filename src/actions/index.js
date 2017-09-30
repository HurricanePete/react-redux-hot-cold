export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const GUESS = 'GUESS';
export const guess = (number) => ({
	type: GUESS,
	number
})

export const INFO_TOGGLE = 'INFO_TOGGLE';
export const infoToggle = () => ({
	type: INFO_TOGGLE
})

