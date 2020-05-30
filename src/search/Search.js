import React, {Component} from 'react';
import Filter from '../common/Filter';
import './styles/search.less';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			searchBy: 'title',
		};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({
			query: event.target.value,
		});

	}

	onChangeSearchType(type) {
		this.setState({
			searchBy: type,
		});
	}

	onSubmit() {
		console.log(`search "${this.state.query}" by ${this.state.searchBy}`);
	}

	render() {
		const isValidQuery = this.state.query.length >= 3;
		return(
			<div className="search">
				<h1>Find your movie</h1>
				<div className="input-section">
					<input type="text" className="text" value={this.state.query} onChange={this.onInputChange}/>
					<button disabled={!isValidQuery} onClick={() => this.onSubmit()}>Search</button>
				</div>
				<Filter
					title="search by"
					options={['title', 'genre']}
					active={this.state.searchBy}
					onChangeOption={(type) => this.onChangeSearchType(type)}
				/>
			</div>
		);
	}
}
