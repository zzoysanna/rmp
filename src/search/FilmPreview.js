import React, { Component } from 'react';
import './styles/film-preview.less';
import { Link } from "react-router-dom";
import * as actions from "../store/actions";
import { connect } from "react-redux";

class FilmPreview extends Component {
	prepareDate(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	render() {
		const { title, release_date, genres, poster_path, id } = this.props.film;
		const {onSetCurrentFilm} = this.props;
		return (
			<Link className="film" to={`/film/${id}`} onClick={() => onSetCurrentFilm(id)}>
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

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetCurrentFilm: (id) => dispatch(actions.setCurrentFilm(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPreview);

