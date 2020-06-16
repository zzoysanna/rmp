import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getFilms, getMovie, searchFilms } from '../apiConnect';
import { config } from '../../config';
import {
	FETCH_FILMS_PENDING,
	FETCH_FILMS_SUCCESS,
	FETCH_MOVIE_PENDING,
	FETCH_MOVIE_SUCCESS
} from '../actions';

const mockStore = configureMockStore([thunk]);

describe('api requests', () => {

	afterEach(() => {
		fetchMock.restore();
	});

	it('should get films', () => {
		const params = '?search=test&searchBy=title&sortBy=release_date&sortOrder=desc';
		fetchMock.getOnce(`${config.apiUrl}movies${params}`, {
			body: { data: ['movies'] }
		});

		const expectedActions = [
			{ type: FETCH_FILMS_PENDING },
			{ type: FETCH_FILMS_SUCCESS, payload: ['movies'] }
		];
		const store = mockStore({ films: [] });

		return store.dispatch(getFilms(params)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should search films by params', () => {
		const params = '?search=test&searchBy=title&sortBy=release_date&sortOrder=desc';
		fetchMock.getOnce(`${config.apiUrl}movies${params}`, {
			body: { data: ['movies'] }
		});

		const expectedActions = [
			{ type: FETCH_FILMS_PENDING },
			{ type: FETCH_FILMS_SUCCESS, payload: ['movies'] }
		];
		const store = mockStore({ films: [] });

		return store.dispatch(searchFilms('test', 0,0 )).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should get movie', () => {
		fetchMock.getOnce(`${config.apiUrl}movies/1`, {
			body: { data: { id: 1 } }
		});

		const expectedActions = [
			{ type: FETCH_MOVIE_PENDING },
			{ type: FETCH_MOVIE_SUCCESS, payload: { id: 1 } }
		];
		const store = mockStore({ films: [], currentFilm: {} });

		return store.dispatch(getMovie(1)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});


