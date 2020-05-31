import * as actions from './actions';
import { CHANGE_SORT } from './actions';
import { CHANGE_SEARCH_TYPE } from './actions';
import { FETCH_FILMS_SUCCESS } from './actions';
import { FETCH_FILMS_ERROR } from './actions';
import { FETCH_FILMS_PENDING } from './actions';
import { FETCH_MOVIE_SUCCESS } from './actions';

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
