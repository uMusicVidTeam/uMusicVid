import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';
import VideoForm from './VideoForm.js';
import Axios from 'axios';

const VideoCreate = () => {
	const initialVideoState = {
		title: '',
		artist: '',
		genre: '',
	};
	const [video, setVideo] = useState(initialVideoState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setVideo({
			...video,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/videos/`;

		Axios.post(url, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(video),
		})
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/videos/${createdId}`} />;
	}
	return (
		<div>
			<h3>Create a Music Video</h3>
			{error && <p>Something went wrong... Please try again!</p>}
			<VideoForm
				video={video}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default VideoCreate;
