import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});
	it('Should render the number provided', () => {
		const number = Math.floor(Math.random() * 100) + 1;
		const wrapper = shallow(<GuessCount count={number} />);
		expect(wrapper.text()).toContain(number);
	});
});