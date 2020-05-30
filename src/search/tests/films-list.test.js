import React from 'react';
import { shallow } from 'enzyme';
import FilmsList from '../FilmsList';

const film1 = {
	id: 1,
	title: 'test-title-1',
	poster_path: 'test-path-1',
	genres: ['a', 'b'],
	release_date: '1234',
};

const film2 = {
	id: 2,
	title: 'test-title-2',
	poster_path: 'test-path-2',
	genres: ['a', 'b', 'c'],
	release_date: '5678',
};

describe('FilmsList', () => {
	it('should be render list correctly', () => {
		const component = shallow(<FilmsList list={[film1, film2]}/>);
		expect(component).toMatchSnapshot();
	});

	it('should be render empty list correctly', () => {
		const component = shallow(<FilmsList list={[]}/>);
		expect(component).toMatchSnapshot();
	});
});
