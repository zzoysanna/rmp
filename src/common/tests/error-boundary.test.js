import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {

	beforeAll(() => {
	});

	it('should be render if not errors', () => {
		const component = shallow(<ErrorBoundary />);
		expect(component.state.hasError).toBeFalsy();
		expect(component).toMatchSnapshot();
	});

	it('should be render if has errors', () => {
		const component = shallow(<ErrorBoundary />);
		const instance = component.instance();
		instance.setState({ hasError: true });
		expect(instance.state['hasError']).toBeTruthy();
		expect(component).toMatchSnapshot();
	});


});
