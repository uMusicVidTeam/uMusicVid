import React, { useState } from 'react';
import Axios from 'axios';

function Create(props) {
	let [url, setUrl] = useState('');
	let [title, setTitle] = useState('');
	let [artist, setArtist] = useState('');
	let [genre, setGenre] = useState('');

	const handleSubmit = (event) => {
		Axios
			.post(`https://umusicvid.herokuapp.com/api/videos/`, { url: url, title: title, artist: artist, genre: genre })
			.then((res) => {
				props.setCreate('none');
				console.log(res);
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
