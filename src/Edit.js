import React, { useState } from 'react';
import Axios from 'axios';

function Edit(props) {
	let [url, setUrl] = useState('');
	let [title, setTitle] = useState('');
	let [artist, setArtist] = useState('');
	let [genre, setGenre] = useState('');
	let [editError, setEditError] = useState('none');

	const handleSubmit = (event) => {
		if (url === '' || title === '' || artist === '' || genre === '') {
			event.preventDefault();
			return setEditError('flex');
		}

		Axios.put(`https://umusicvid.herokuapp.com/api/videos/${props.id}`, {
			url: url,
			title: title,
			artist: artist,
			genre: genre,
		}).then((res) => {
			props.setEdit('none');
		});
	};

	return (
		<div>
			<div className='modal' style={{ display: props.edit }}>
				<form
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleSubmit}>
					<input
						onChange={(event) => setUrl(event.target.value)}
						id='url'
						type='text'
						defaultValue={props.url}></input>
					<input
						onChange={(event) => setTitle(event.target.value)}
						id='title'
						type='text'
						defaultValue={props.title}></input>
					<input
						onChange={(event) => setArtist(event.target.value)}
						id='artist'
						type='text'
						defaultValue={props.artist}></input>
					<input
						onChange={(event) => setGenre(event.target.value)}
						id='genre'
						type='text'
						defaultValue={props.genre}></input>
					<input id='submit' type='submit' placeholder='submit'></input>
				</form>
				<button onClick={() => props.setEdit('none')}>Cancel</button>
			</div>
			<div className='modal' style={{ display: editError }}>
				<h2>NO FIELD SHALL BE LEFT BLANK.</h2>
				<button onClick={() => setEditError('none')}>Sorry...</button>
			</div>
		</div>
	);
}

export default Edit;
