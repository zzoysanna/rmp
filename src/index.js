import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import ErrorBoundary from './common/ErrorBoundary';
import App from './App.js';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<ErrorBoundary>
		<Provider store={store}>
			<App />
		</Provider>
	</ErrorBoundary>,
	document.getElementById('root')
);
