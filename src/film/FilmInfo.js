import React, {Component} from 'react';
import './styles/film-info.less';

export default class FilmInfo extends Component {
	constructor(props) {
		super(props);
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
		return (
			<div className="info">
				<img src={poster_path} alt={title} className="info-image"/>
				<div className="info-description">
					<div className="info-header">
						<h1>{title}</h1>
						<span className="info-rating">{vote_average}</span>
					</div>
					<p className="info-genre">{genres.join('&')}</p>
					<div className="info-timing">
						<p><span>{release_date}</span>year</p>
						<p><span>{runtime}</span>min</p>
					</div>
					<div>{overview}</div>
				</div>
			</div>
		)
	}
}
