import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
// import About from './About';
import './App.css';
import { Route } from 'react-router-dom';
import VideoDetail from './components/VideoDetail';

function App() {
	return (
		<div className='App'>
			<Header />
			<Route
				exact
				path='/'
				render={() => {
					return <Home />;
				}}
			/>
			<Route
				path='/detail/'
				render={(routerProps) => {
					return <VideoDetail match={routerProps.match} />;
				}}
			/>
		</div>
	);
}

export default App;
