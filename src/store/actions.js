
export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const SET_CURRENT_FILM = 'SET_CURRENT_FILM';

export const FETCH_FILMS_PENDING = 'FETCH_FILMS_PENDING';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';


export function changeSort() {
	return {
		type: CHANGE_SORT
	};
}

export function changeSearchType() {
	return {
		type: CHANGE_SEARCH_TYPE
	};
}

export function setCurrentFilm(id) {
	return {
		type: SET_CURRENT_FILM,
		payload: id,
	}
}

export function fetchFilmsPending() {
	return {
		type: FETCH_FILMS_PENDING
	};
}

export function fetchFilmsSuccess(films) {
	return {
		type: FETCH_FILMS_SUCCESS,
		payload: films,
	};
}

export function fetchFilmsError(error) {
	return {
		type: FETCH_FILMS_ERROR,
		error: error,
	};
}

export function fetchMoviePending() {
	return {
		type: FETCH_MOVIE_PENDING
	};
}

export function fetchMovieSuccess(movie) {
	return {
		type: FETCH_MOVIE_SUCCESS,
		payload: movie,
	};
}

export function fetchMovieError(error) {
	return {
		type: FETCH_MOVIE_ERROR,
		error: error,
	};
}
