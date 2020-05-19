import React, {Component} from 'react';
import FilmsList from './search/FilmsList';
import Filter from './common/Filter';
import Search from "./search/Search";
import FilmInfo from "./film/FilmInfo";
import ErrorBoundary from "./common/ErrorBoundary";

const films = [
	{
		id: 1,
		title: 'Побег из Шоушенка',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg',
		genres: ['Action', 'Adventure'],
		release_date: '1997',
		overview: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
		runtime: 157,
		vote_average: 4.5,
	},
	{
		id: 2,
		title: 'Начало',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg',
		genres: ['Comedy', 'Adventure'],
		release_date: '2097',
	},
	{
		id: 3,
		title: 'Криминальное чтиво',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg',
		genres: ['Action', 'Comedy', 'Horror'],
		release_date: '2007',
	},
	{
		id: 4,
		title: 'Побег из Шоушенка',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg',
		genres: ['Action', 'Adventure'],
		release_date: '1997',
	},
	{
		id: 5,
		title: 'Начало',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg',
		genres: ['Comedy', 'Adventure'],
		release_date: '2097',
	},
	{
		id: 6,
		title: 'Криминальное чтиво',
		poster_path: 'https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg',
		genres: ['Action', 'Comedy', 'Horror'],
		release_date: '2007',
	},
];

const sortingOptions = ['release date', 'rating'];

const Logo = () => <span className="logo"><strong>netflix</strong>roulette</span>;

const SearchResults = (props) => <p className="search-result">{props.number} movies found</p>;

export default class App extends Component {

	onChangeFilmsSort(type) {
		console.log(`sort by ${type}`)
	}

	render() {
		return (
			<ErrorBoundary>
				<header>
					<Logo />
				</header>

				<section className="top">
					<div className="layout-inner">
						<Search />
						{/*<FilmInfo film={films[0]}/>*/}
					</div>
				</section>
				<section className="middle">
					<div className="layout-inner">
						<SearchResults number={films.length} />
						<Filter
							title="sort by"
							options={sortingOptions}
							active={sortingOptions[0]}
							onChangeOption={this.onChangeFilmsSort.bind(this)}
						/>
					</div>
				</section>
				<section className="bottom">
					<FilmsList list={films}/>
				</section>

				<footer>
					<Logo />
				</footer>
			</ErrorBoundary>
		)
	}
}
