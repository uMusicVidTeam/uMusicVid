import React, { Component } from 'react';
import axios from 'axios';
import { APIURL } from './config.js';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		axios({
			url: `${APIURL}/login`,
			method: 'POST',
			data: this.state,
		}).then((res) => {
			sessionStorage.setItem('token', res.data.token);
		});
	};
	render() {
		// Note that we need to use `htmlFor` instead of `for` in JSX
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='email'>Email: </label>
					<input
						id='email'
						type='email'
						onChange={this.handleChange}
						value={this.state.email}
					/>
					<label htmlFor='password'>Password: </label>
					<input
						id='password'
						type='password'
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<input type='submit' />
				</form>
				<br />
				<Link to='/signup'>
					If you do not have an account, Click here to Signup!
				</Link>
			</div>
		);
	}
}

export default Login;
