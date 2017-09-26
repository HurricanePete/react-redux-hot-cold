import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});
	it('Should fire the onGuess callback when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const value = Math.floor(Math.random() * 100) + 1;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value.toString());
	});
	it('Should not fire the callback with an empty input', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onSubmit={callback} />);
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalled();
	});
});