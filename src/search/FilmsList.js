import React, { Component } from 'react';
import FilmPreview from './FilmPreview';
import './styles/film-list.less';

export default class FilmList extends Component {
	render() {
		const {list} = this.props;
		return (
			<>
				{!!list.length && (
					<div className="film-list">
						{list.map((film, i) => {
							return <FilmPreview key={i} film={film}/>;
						})}
					</div>
				)}
				{!list.length && <div className="no-films">No films found</div>}
			</>
		);
	}
}
