import React, {Component} from 'react';
import RadioButtons from './RadioButtons';
import './styles/filter.less';

export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.onChangeType = this.onChangeType.bind(this);
	}

	onChangeType(type) {
		typeof this.props.onChangeOption === 'function' && this.props.onChangeOption(type);
	}

	render() {
		const {title, options, active} = this.props;
		return (
			<div className="filter">
				<span className="filter-title">{title}</span>
				<RadioButtons options={options} active={active} onChange={this.onChangeType}/>
			</div>
		)
	}
}
