import React, { Component } from 'react';
import axios from 'axios';
import { APIURL } from './config.js';

class Signup extends Component {
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
			url: `${APIURL}/signup`,
			method: 'POST',
			data: this.state,
		}).then(console.log);
	};
	render() {
		// Note that we need to use `htmlFor` instead of `for` in JSX
		return (
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
		);
	}
}

export default Signup;
