import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		const array = ['test 1', 'test 2', 'test 3'];
		shallow(<GuessList guesses={array} />);
	});
	it('Renders the state correctly', () => {
		const array = ['test 1', 'test 2', 'test 3'];
		const wrapper = shallow(<GuessList guesses={array} />);
		expect(wrapper.text()).toContain(array.join(''));
	})
});