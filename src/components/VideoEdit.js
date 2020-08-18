import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from '../config.js';
import VideoForm from './VideoForm.js';
import Axios from 'axios';

const VideoEdit = ({ match }) => {
	const [video, setVideo] = useState(null);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/videos/${match.params.id}`;
		Axios(url)
			.then((data) => {
				setVideo({ artist: data.artist, title: data.title, genre: data.genre });
			})
			.catch(() => {
				setError(true);
			});
	}, [match.params.id]);

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

		Axios.put(url, {
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
			{video && (
				<VideoForm
					video={video}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	);
};

export default VideoEdit;
