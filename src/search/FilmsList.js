import React, { Component } from 'react';
import FilmPreview from './FilmPreview';
import './styles/film-list.less';

export default class FilmList extends Component {
	render() {
		const {list, pending} = this.props;
		return (
			<>
				{(!!list.length && !pending) && (
					<div className="film-list">
						{list.map((film, i) => {
							return <FilmPreview key={i} film={film}/>;
						})}
					</div>
				)}
				{(!list.length && !pending) && <div className="no-films">No films found</div>}
				{pending && <div className="no-films">Searching...</div>}
			</>
		);
	}
}
