import React, { Component } from 'react';
import './styles/film-preview.less';

export default class FilmPreview extends Component {
	goToFilm() {
		const {id} = this.props.film;
		console.log(`go to film id=${id}`);
	}

	render() {
		const {title, release_date, genres, poster_path} = this.props.film;
		return (
			<div className="film" onClick={() => this.goToFilm()}>
				<img src={poster_path} alt={title}/>
				<div className="info">
					<p>
						<span className="title">{title}</span>
						<span className="genre">{genres.join('&')}</span>
					</p>
					<span className="year">{release_date}</span>
				</div>
			</div>
		);
	}
}
