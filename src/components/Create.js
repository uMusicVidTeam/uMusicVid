import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';
// import VideoForm from './VideoForm.js';
import Axios from 'axios';

function Create(props) {
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [artist, setArtist] = useState('');
	const [genre, setGenre] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const api = `https://umusicvid.herokuapp.com/api/videos/`;
		Axios.post(
			api,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			},
			{
				url: url,
				title: title,
				artist: artist,
				genre: genre,
			}
		)
			.then((res) => {
				props.setCreate('none');
				console.log(res);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className='modal' style={{ display: props.create }}>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}>
				<input
					onChange={(event) => setUrl(event.target.value)}
					id='url'
					type='text'
					placeholder='url'></input>
				<input
					onChange={(event) => setTitle(event.target.value)}
					id='title'
					type='text'
					placeholder='title'></input>
				<input
					onChange={(event) => setArtist(event.target.value)}
					id='artist'
					type='text'
					placeholder='artist'></input>
				<input
					onChange={(event) => setGenre(event.target.value)}
					id='genre'
					type='text'
					placeholder='genre'></input>
				<input id='submit' type='submit' placeholder='submit'></input>
			</form>
			<button onClick={() => props.setCreate('none')}>Cancel</button>
		</div>
	);
}

export default Create;
