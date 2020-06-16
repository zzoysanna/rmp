import React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from '../RadioButtons';

describe('RadioButtons', () => {

	beforeAll(() => {
	});

	it('should be render correctly', () => {
		const component = shallow(
			<RadioButtons options={['a', 'b']} active={'a'} onChange={jest.fn}/>
		);
		expect(component).toMatchSnapshot();
	});

	it('should change option', () => {
		const onChange = jest.fn();
		const component = shallow(
			<RadioButtons options={['a', 'b']} active={'a'} onChange={onChange}/>
		);
		component.find('button:not(.active)').simulate('click');
		expect(onChange).toHaveBeenCalled();
	});
});
