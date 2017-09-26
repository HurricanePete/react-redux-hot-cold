import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
	it('Renders without crashing', () => {
		shallow(<InfoModal />);
	});
	it('Should fire the callback on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<InfoModal onClose={callback}/>);
		wrapper.find('a').simulate('click');
		expect(callback).toHaveBeenCalled();
	})
});