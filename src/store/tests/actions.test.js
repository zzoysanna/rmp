import * as actions from '../actions';
import {
	CHANGE_SORT,
	CHANGE_SEARCH_TYPE,
	FETCH_FILMS_SUCCESS,
	FETCH_FILMS_ERROR,
	FETCH_FILMS_PENDING,
	FETCH_MOVIE_SUCCESS
} from '../actions';

describe('actions', () => {
	it('should return actions', () => {
		expect(actions.changeSort()).toEqual({
			type: CHANGE_SORT
		});
		expect(actions.changeSearchType()).toEqual({
			type: CHANGE_SEARCH_TYPE
		});
		expect(actions.fetchFilmsSuccess([])).toEqual({
			type: FETCH_FILMS_SUCCESS,
			payload: []
		});
		expect(actions.fetchMovieSuccess({})).toEqual({
			type: FETCH_MOVIE_SUCCESS,
			payload: {}
		});
		expect(actions.fetchFilmsPending()).toEqual({
			type: FETCH_FILMS_PENDING,
		});

		const error = new Error('test');
		expect(actions.fetchFilmsError(error)).toEqual({
			type: FETCH_FILMS_ERROR,
			error: error
		});

	});
});
