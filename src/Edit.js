import React, { useState } from 'react';
import { APIURL } from './config.js';

import Axios from 'axios';

function Edit(props) {
	let [url, setUrl] = useState('');
	let [title, setTitle] = useState('');
	let [artist, setArtist] = useState('');
	let [genre, setGenre] = useState('');

	const handleSubmit = (event) => {
		Axios({
			url: `${APIURL}/videos/${props.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${props.token}`,
			},
			data: {
				url: url,
				title: title,
				artist: artist,
				genre: genre,
			},
		}).then((res) => {
			props.setEdit('none');
			console.log(res);
		});
	};

	return (
		<div className='modal' style={{ display: props.edit }}>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}>
				<input
					onChange={(event) => setUrl(event.target.value)}
					id='url'
					type='text'
					placeholder={props.url}></input>
				<input
					onChange={(event) => setTitle(event.target.value)}
					id='title'
					type='text'
					placeholder={props.title}></input>
				<input
					onChange={(event) => setArtist(event.target.value)}
					id='artist'
					type='text'
					placeholder={props.artist}></input>
				<input
					onChange={(event) => setGenre(event.target.value)}
					id='genre'
					type='text'
					placeholder={props.genre}></input>
				<input id='submit' type='submit' placeholder='submit'></input>
			</form>
			<button onClick={() => props.setEdit('none')}>Cancel</button>
		</div>
	);
}

export default Edit;
