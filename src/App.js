import React, { Component } from 'react';
import Search from './search/Search';
import Films from './search/Films';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FilmInfo from "./film/FilmInfo";

export default class App extends Component {

	render() {
		return (
			<Router>
				<header><Logo /></header>

				<section className="top">
					<div className="layout-inner">
						<Switch>
							<Route exact path="/" component={Search}/>
							<Route path="/film/:id" component={FilmInfo}/>
							<Route path="/search/:query" component={Search}/>
							<Route path="**" component={NotFoundPage}/>
						</Switch>
					</div>
				</section>

				<Films />

				<footer><Logo /></footer>
			</Router>
		);
	}
}

const Logo = () => <Link to="/" className="logo"><strong>netflix</strong>roulette</Link>;

const NotFoundPage = () => (
	<div className="not-found">
		<h3>Page not found</h3>
		<p>But look - there are some films for you!</p>
	</div>
);
