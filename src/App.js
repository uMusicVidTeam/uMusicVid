import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { Route } from 'react-router-dom';
import VideoDetail from './VideoDetail';
import Signup from './Signup';
import Login from './Login';

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
				path='/detail/:title'
				render={(routerProps) => {
					return <VideoDetail match={routerProps.match} />;
				}}
			/>
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} />
		</div>
	);
}

export default App;
