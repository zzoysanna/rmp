import React, {Component} from 'react';
import './styles/error-boundary.less';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error">
					<img src="https://miro.medium.com/max/800/1*cLOskwDOJD2FWB9xbYF7aQ.gif" alt="have a break"/>
					<h1>Sorry, something went wrong</h1>
				</div>
			);
		}

		return this.props.children;
	}
}
