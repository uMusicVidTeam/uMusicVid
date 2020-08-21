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
				url: url || props.url,
				title: title || props.title,
				artist: artist || props.artist,
				genre: genre || props.genre,
			},
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
					<select onChange={(event) => setGenre(event.target.value)} id='genre'>
						<option selected={props.genre === 'Pop' ? true : false} value='Pop'>
							Pop
						</option>
						<option
							selected={props.genre === 'Rock' ? true : false}
							value='Rock'>
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
				<button onClick={() => props.setEdit('none')}>Cancel</button>
			</div>
		</div>
	);
}

export default Edit;
