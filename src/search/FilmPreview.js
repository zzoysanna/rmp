import React, { Component } from 'react';
import './styles/film-preview.less';

export default class FilmPreview extends Component {
	goToFilm() {
		const { id } = this.props.film;
		console.log(`go to film id=${id}`);
	}

	prepareDate(date) {
		const releaseDate = new Date(date);
		return releaseDate.getFullYear();
	}

	render() {
		const { title, release_date, genres, poster_path } = this.props.film;
		return (
			<div className="film" onClick={() => this.goToFilm()}>
				<div style={{ backgroundImage: `url(${poster_path})` }} className="poster">&nbsp;</div>
				<div className="info">
					<p>
						<span className="title">{title}</span>
						<span className="genre">{genres.join('&')}</span>
					</p>
					<span className="year">{this.prepareDate(release_date)}</span>
				</div>
			</div>
		);
	}
}
