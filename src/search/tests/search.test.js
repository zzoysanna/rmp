import React from 'react';
import { mount } from 'enzyme';
import Search from '../Search';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('Search', () => {
	let store, component;

	beforeEach(() => {
		store = mockStore({
			searchType: 0,
			sortType: 0,
		});
		component = mount(
			<Provider store={store}>
				<Search />
			</Provider>
		);
	});

	it('should be render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	it('should be render correctly on button click', () => {
		component.find('.input-section input').simulate('change', { target: { value: 'test' } });
		component.find('.radio-buttons button:not(.active)').simulate('click');
		expect(store.getActions()).toMatchSnapshot();
	});
});
