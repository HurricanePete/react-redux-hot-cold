import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
	it('Should switch state to true', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal();
		expect(wrapper.state('showInfoModal')).toEqual(true);
	})
});