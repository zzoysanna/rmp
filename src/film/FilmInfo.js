import React, { Component } from 'react';
import './styles/film-info.less';
import { connect } from "react-redux";

class FilmInfo extends Component {

	prepareDate(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	render() {
		const {
			title,
			release_date,
			genres,
			poster_path,
			overview,
			runtime,
			vote_average
		} = this.props.film;
		const {id, film} = this.props;
		return (
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
}

const mapStateToProps = (state, ownProps) => {
	return {
		film: state.currentFilm,
		id: ownProps.match.params.id
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
