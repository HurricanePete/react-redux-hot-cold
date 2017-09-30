import * as actions from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
}

export const hotColdReducer = (state = initialState, action) => {
	if (action.type === actions.NEW_GAME) {
		return Object.assign({}, state, {
			guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1
		});
	}
	else if (action.type === actions.GUESS) {
		const guess = parseInt(action.number, 10);
        if (isNaN(guess)) {
            return Object.assign({}, state, {
            	feedback: 'Please enter a valid number'
            });
        }
        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback: feedback,
            guesses: [...state.guesses, guess]
        });
    } 
    else if (action.type === actions.INFO_TOGGLE) {
    	return Object.assign({}, state, {
    		showInfoModal: !state.showInfoModal
    	});
    }
	return state;

}