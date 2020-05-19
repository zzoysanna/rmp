import React, { Component } from 'react';
import './styles/radiobuttons.less';

export default class RadioButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: this.props.active,
		}
	}

	setOption(option) {
		if(option !== this.state.active) {
			this.setState({
				active: option,
			});
			typeof this.props.onChange === 'function' && this.props.onChange(option);
		}
	}

	render() {
		const {options} = this.props;
		const {active} = this.state;
		return (
			<div className="radio-buttons">
				{options.map((option, i) => {
					return (
						<button
							key={i}
							className={active === option ? 'active' : ''}
							onClick={this.setOption.bind(this, option)}
						>
							{option}
						</button>
					)
				})}
			</div>
		)
	}
}
