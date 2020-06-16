import React, { Component } from 'react';
import './styles/film-preview.less';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

class FilmPreview extends Component {
	prepareDate(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	onFilmClick(id) {
		window.scroll(0,0);
		this.props.onSetCurrentFilm(id);
	}

	render() {
		const { title, release_date, genres, poster_path, id } = this.props.film;
		return (
			<Link className="film" to={`/film/${id}`} onClick={() => this.onFilmClick(id)}>
				<div style={{ backgroundImage: `url(${poster_path})` }} className="poster">&nbsp;</div>
				<div className="info">
					<p>
						<span className="title">{title}</span>
						<span className="genre">{genres.join('&')}</span>
					</p>
					<span className="year">{this.prepareDate(release_date)}</span>
				</div>
			</Link>
		);
	}
}

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetCurrentFilm: (id) => dispatch(actions.setCurrentFilm(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPreview);

