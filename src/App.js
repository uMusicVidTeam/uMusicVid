import React from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import VideoList from './components/VideoList';
import Create from './components/Create';
import VideoEdit from './components/VideoEdit';
import Video from './components/Video.js';
// import About from './components/About';
import './App.css';

const App = () => (
	<div>
		<header>
			<Link to='/videos/create'>Create</Link>
			<Header />
		</header>
		<main>
			<Route exact path='/' component={Home} />
			<Route exact path='/videos/create' component={Create} />
			<Route exact path='/videos' component={VideoList} />
			<Route exact path='/videos/:id' component={Video} />
			<Route exact path='/videos/:id/edit' component={VideoEdit} />
		</main>
	</div>
);

export default App;
