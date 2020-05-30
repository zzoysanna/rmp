import React, {Component} from 'react';
import RadioButtons from './RadioButtons';
import './styles/filter.less';

export default class Filter extends Component {
	onChangeType(type) {
		typeof this.props.onChangeOption === 'function' && this.props.onChangeOption(type);
	}

	render() {
		const {title, options, active} = this.props;
		return (
			<div className="filter">
				<span className="filter-title">{title}</span>
				<RadioButtons options={options} active={active} onChange={(type) => this.onChangeType(type)}/>
			</div>
		);
	}
}
