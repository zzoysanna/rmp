import React, { Component } from 'react';
import './styles/film-info.less';
import { connect } from 'react-redux';
import { getMovie } from '../store/apiConnect';
import * as actions from '../store/actions';
import { NotFoundPage } from '../common/NotFound';

class FilmInfo extends Component {

	componentDidMount() {
		const { id, film } = this.props;
		if(!film || !('id' in film) || film.id !== id) {
			this.getMovie(Number(id));
		}
	}

	getMovie(id) {
		let isFilmInList = this.props.list.findIndex(item => item.id === id) >= 0;
		if(isFilmInList) {
			this.props.onSetCurrentFilm(id);
		} else {
			this.props.onGetMovieFromBackend(id);
		}
	}

	prepareDate(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	render() {
		const { pending, film } = this.props;
		const hasFilm = !!film && Object.keys(film).length > 0;

		const pendingTemplate = <div>Searching the film...</div>;
		let filmTemplate;


		if (hasFilm) {
			const {
				title,
				release_date,
				genres,
				poster_path,
				overview,
				runtime,
				vote_average
			} = this.props.film;
			filmTemplate = (
				<div className="info">
					<div style={{ backgroundImage: `url(${poster_path})` }} className="info-image">&nbsp;</div>
					<div className="info-description">
						<div className="info-header">
							<h1>{title}</h1>
							<span className="info-rating">{vote_average}</span>
						</div>
						<p className="info-genre">{genres.join('&')}</p>
						<div className="info-timing">
							<p><span>{this.prepareDate(release_date)}</span>year</p>
							<p><span>{runtime}</span>min</p>
						</div>
						<div>{overview}</div>
					</div>
				</div>
			);
		}

		return (
			<>
				{pending && pendingTemplate}
				{!pending && hasFilm && filmTemplate}
				{!pending && !hasFilm && <NotFoundPage />}
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		list: state.films,
		film: state.currentFilm,
		pending: state.pending,
		id: ownProps.match.params.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetCurrentFilm: (id) => dispatch(actions.setCurrentFilm(id)),
		onGetMovieFromBackend: (id) => dispatch(getMovie(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
