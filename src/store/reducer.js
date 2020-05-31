import {
	CHANGE_SORT,
	CHANGE_SEARCH_TYPE,
	FETCH_FILMS_PENDING,
	FETCH_FILMS_SUCCESS,
	FETCH_FILMS_ERROR,
} from './actions';

const initialState = {
	films: [],
	currentFilm: {},
	sortType: 0,
	searchType: 0,
	pending: false,
	error: null,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
	case CHANGE_SORT:
		const newSortType = Number(!state.sortType);
		let newFilms = [...state.films];
		if(state.films.length) {
			switch (newSortType) {
			case 0:
				newFilms.sort((a,b) => {
					const dateA = new Date(a.release_date);
					const dateB = new Date(b.release_date);
					return dateB - dateA;
				});
				break;
			case 1:
				newFilms.sort((a,b) => b.vote_average - a.vote_average);
				break;
			}
		}
		return {
			...state,
			sortType: newSortType,
			films: newFilms,
		};
	case CHANGE_SEARCH_TYPE:
		const newSearchType = Number(!state.searchType);
		return { ...state, searchType: newSearchType };
	case FETCH_FILMS_PENDING:
		return { ...state, pending: true };
	case FETCH_FILMS_SUCCESS:
		return { ...state, pending: false, films: action.payload };
	case FETCH_FILMS_ERROR:
		return { ...state, pending: false, error: action.error };
	default:
		return state;
	}
}


