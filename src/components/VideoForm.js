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

export default VideoForm;
