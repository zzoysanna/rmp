import {
	fetchFilmsPending,
	fetchFilmsSuccess,
	fetchFilmsError,
	fetchMovieError,
	fetchMoviePending,
	fetchMovieSuccess
} from './actions';
import { config } from '../config';

export const searchFilms = (query, searchType, sortType) => {
	const search = config.searchOptionsAPI[searchType];
	const sort = config.sortOptionsAPI[sortType];
	const params = `?search=${query}&searchBy=${search}&sortBy=${sort}&sortOrder=desc`;
	return getFilms(params);
};

export const getFilms = (params) => {
	let url = `${config.apiUrl}movies`;
	if(params) {
		url += params;
	}

	return dispatch => {
		dispatch(fetchFilmsPending());
		return fetch(url)
			.then(res => res.json())
			.then(res => {
				if(res.error) {
					throw(res.error);
				}
				dispatch(fetchFilmsSuccess(res.data));
			})
			.catch(error => dispatch(fetchFilmsError(error)));
	};
};

export const getMovie = (id) => {
	return dispatch => {
		dispatch(fetchMoviePending());
		return fetch(`${config.apiUrl}movies/${id}`)
			.then(res => res.json())
			.then(res => {
				if(res.error) {
					throw(res.error);
				}
				dispatch(fetchMovieSuccess(res));
			})
			.catch(error => dispatch(fetchMovieError(error)));
	};
};
