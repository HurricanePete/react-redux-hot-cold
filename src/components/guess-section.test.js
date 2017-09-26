import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});
	it('Should render properties correctly', () => {
		const test = 'test';
		const wrapper = shallow(<GuessSection feedback={test} />);
		expect(wrapper.contains(<h2 id="feedback">{test}</h2>)).toEqual(true);
	});
});