import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from '../Filter';
import RadioButtons from '../RadioButtons';

describe('Filter', () => {

	it('should be render correctly', () => {
		const component = shallow(
			<Filter
				title={'test'}
				options={['a', 'b']}
				active={'a'}
				onChangeOption={jest.fn}/>
		);
		expect(component).toMatchSnapshot();
	});

	it('should change filter type', () => {
		const onChange = jest.fn();
		const component = mount(
			<Filter
				title={'test'}
				options={['a', 'b']}
				active={'a'}
				onChangeOption={onChange}/>
		);
		const childInstance = component.find(RadioButtons).instance();
		childInstance.setOption('b');
		expect(onChange).toHaveBeenCalled();
	});
});
