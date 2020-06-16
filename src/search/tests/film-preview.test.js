import React from 'react';
import { shallow } from 'enzyme';
import FilmPreview from '../FilmPreview';

const film1 = {
	id: 1,
	title: 'test-title-1',
	poster_path: 'test-path-1',
	genres: ['a', 'b'],
	release_date: '1234',
};

describe('FilmPreview', () => {
	let film;

	beforeAll(() => {
		film = film1;
	});

	it('should be render correctly', () => {
		const component = shallow(<FilmPreview film={film}/>);
		expect(component).toMatchSnapshot();
	});
});
