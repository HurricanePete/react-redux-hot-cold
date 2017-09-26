import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});
	it('Should fire the info callback on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onInfo={callback} />);
		wrapper.find('a.what').simulate('click');
		expect(callback).toHaveBeenCalled();
	});
	it('Should fire the new game callback on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onNewGame={callback} />);
		wrapper.find('a.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	})
});