import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import VideoList from './components/VideoList';
import VideoCreate from './components/VideoCreate';
import VideoEdit from './components/VideoEdit';
import Video from './components/Video.js';
import About from './components/About';
import './App.css';

const App = () => (
	<div>
		<header>
			<Link></Link>
			<Link></Link>
			<Link></Link>
		</header>
		<main>
			<Switch>
				<Route />
				<Route />
				<Route />
				<Route />
				<Route />
			</Switch>
		</main>
	</div>
);

export default App;
