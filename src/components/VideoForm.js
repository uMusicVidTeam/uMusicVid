import React from 'react';

const VideoForm = ({ video, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		<label htmlFor='title'>Title</label>
		<input
			placeholder='Music Video Title'
			value={video.title}
			name='title'
			onChange={handleChange}
			required
			id='title'
		/>

		<label htmlFor='artist'>Artist</label>
		<input
			placeholder='Artist Name'
			value={video.artist}
			name='artist'
			onChange={handleChange}
			id='artist'
		/>

		<button type='submit'>Submit</button>
	</form>
);
return (
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
)

export default VideoForm;
