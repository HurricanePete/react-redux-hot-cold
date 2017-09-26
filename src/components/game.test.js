import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});
	it('Should add the guessed number to state', () => {
		const wrapper = shallow(<Game />);
		const number = Math.floor(Math.random() * 100) + 1;
		wrapper.instance().guess(number);
		expect(wrapper.state('guesses')).toContain(number);
	});
	it('Should reset state on newGame', () => {
		const resetState = {
			guesses: [],
			feedback: 'Make your guess!'
		}
		const wrapper = shallow(<Game />);
		const number = Math.floor(Math.random() * 100) + 1;
		wrapper.instance().guess(number);
		wrapper.instance().newGame();
		expect(wrapper.state()).toMatchObject(resetState);
	})
	it('Should change feedback to reflect an invalid entry', () => {
		const wrapper = shallow(<Game />);
		const invalid = "four";
		wrapper.instance().guess(invalid);
		expect(wrapper.state('feedback')).toMatch('Please enter a valid number');
	})
});