import React, {Component} from 'react';
import Search from './search/Search';
// import FilmInfo from './film/FilmInfo';
import Films from './search/Films';

export default class App extends Component {

	render() {
		return (
			<>
				<header>
					<Logo />
				</header>

				<section className="top">
					<div className="layout-inner">
						<Search />
						{/*<FilmInfo film={films[0]}/>*/}
					</div>
				</section>

				<Films />

				<footer>
					<Logo />
				</footer>
			</>
		);
	}
}

const Logo = () => <span className="logo"><strong>netflix</strong>roulette</span>;
