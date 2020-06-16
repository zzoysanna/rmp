import React, { Component } from 'react';
import { connect } from 'react-redux';
import { config } from '../config';
import FilmsList from './FilmsList';
import Filter from '../common/Filter';
import * as actions from '../store/actions';

export class Films extends Component {
	render() {
		const { films, sortType, onChangeSort, pending } = this.props;
		return(
			<>
				<section className="middle">
					<div className="layout-inner">
						<SearchResults number={films.length} />
						<Filter
							title="sort by"
							options={config.sortOptions}
							active={sortType}
							onChangeOption={() => onChangeSort()}
						/>
					</div>
				</section>
				<section className="bottom">
					<FilmsList list={films} pending={pending}/>
				</section>
			</>
		);
	}
}

const SearchResults = (props) => <p className="search-result">
	{props.number} {props.number === 1 ? 'movie' : 'movies'} found
</p>;

const mapStateToProps = (state) => {
	return {
		films: state.films,
		sortType: state.sortType,
		pending: state.pending
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeSort: () => dispatch(actions.changeSort())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
