import React, { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function Create(props) {
	let [url, setUrl] = useState('');
	let [title, setTitle] = useState('');
	let [artist, setArtist] = useState('');
	let [genre, setGenre] = useState('');
	let [createError, setCreateError] = useState('none');

	const handleSubmit = (event) => {
		if (url === '' || title === '' || artist === '') {
			event.preventDefault();
			return setCreateError(true);
		}
		Axios.post(`https://umusicvid.herokuapp.com/api/videos/`, {
			url: url,
			title: title,
			artist: artist,
			genre: genre,
		}).then((res) => {
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
				<select onChange={(event) => setGenre(event.target.value)} id='genre'>
					<option selected={props.genre === 'Pop' ? true : false} value='Pop'>
						Pop
					</option>
					<option selected={props.genre === 'Rock' ? true : false} value='Rock'>
						Rock
					</option>
					<option
						selected={props.genre === 'Hip-Hop' ? true : false}
						value='Hip-Hop'>
						Hip-Hop
					</option>
					<option selected={props.genre === 'RnB' ? true : false} value='RnB'>
						RnB
					</option>
					<option
						selected={props.genre === 'Metal' ? true : false}
						value='Metal'>
						Metal
					</option>
					<option
						selected={props.genre === 'Country' ? true : false}
						value='Country'>
						Country
					</option>
					<option
						selected={props.genre === 'Other' ? true : false}
						value='Other'>
						Other
					</option>
				</select>
				<input id='submit' type='submit' placeholder='submit'></input>
			</form>
			<div className='modal' style={{ display: createError }}>
				<h2>NO FIELD SHALL BE LEFT BLANK.</h2>
				<button onClick={() => setCreateError('none')}>Sorry...</button>
			</div>
			<button onClick={() => props.setCreate('none')}>Cancel</button>
		</div>
	);
}

export default Create;
