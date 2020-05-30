import React, {Component} from 'react';
import Filter from '../common/Filter';
import './styles/search.less';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import {config} from '../config';
import { searchFilms } from '../apiConnect';

export class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({
			query: event.target.value,
		});

	}

	render() {
		const {
			searchType,
			sortType,
			onChangeSearchType,
			onSearch
		} = this.props;
		const {query} = this.state;
		const isValidQuery = query.length >= 3;
		return(
			<div className="search">
				<h1>Find your movie</h1>
				<div className="input-section">
					<input type="text" className="text" value={query} onChange={this.onInputChange}/>
					<button
						disabled={!isValidQuery}
						onClick={() => onSearch(query, searchType, sortType)}>
						Search
					</button>
				</div>
				<Filter
					title="search by"
					options={config.searchOptions}
					active={searchType}
					onChangeOption={() => onChangeSearchType()}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchType: state.searchType,
		sortType: state.sortType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeSearchType: () => dispatch(actions.changeSearchType()),
		onSearch: (query, search, sort) => dispatch(searchFilms(query, search, sort)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
