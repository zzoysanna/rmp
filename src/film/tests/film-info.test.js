import React from 'react';
import { shallow } from 'enzyme';
import FilmInfo from '../FilmInfo';

describe('FilmInfo', () => {
	let film;

	beforeAll(() => {
		film = {
			id: 1,
			title: 'test-title',
			poster_path: 'test-poster.jpg',
			genres: ['a', 'b'],
			release_date: '1997',
			overview: 'test-description',
			runtime: 157,
			vote_average: 4.5,
		};
	});

	it('should be render correctly', () => {
		const component = shallow(<FilmInfo film={film}/>);
		expect(component).toMatchSnapshot();
	});
});
