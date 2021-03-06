import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { Route } from 'react-router-dom';
import VideoDetail from './VideoDetail';

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
				path='/detail/:id'
				render={(routerProps) => {
					return <VideoDetail match={routerProps.match} />;
				}}
			/>
		</div>
	);
}

export default App;
