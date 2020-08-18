import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from '../config';
// import ReactPlayer from 'react-player';
import Axios from 'axios';

const Video = ({ match }) => {
	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [video, setVideo] = useState(null);

	useEffect(() => {
		const url = `https://umusicvid.herokuapp.com/api/videos/${match.params.id}`;
		Axios(url)
			.then(setVideo)
			.catch(() => {
				setError(true);
			});
	}, [match.params.id]);

	const onDeleteVideo = (event) => {
		const url = `https://umusicvid.herokuapp.com/api/videos/${match.params.id}`;
		Axios.delete(url)
			.then((res) => {
				setDeleted(true);
			})
			.catch(console.error);
	};
	if (deleted) {
		return <Redirect to='/videos' />;
	}

	if (error) {
		return <div>Sorry, there was a problem getting the music videos</div>;
	}

	if (!video) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h3>Title: {video.title}</h3>
			<p>Artist: {video.artist}</p>
			<p>Genre: {video.genre}</p>
			<button onClick={onDeleteVideo}>Delete Music Video</button>
			<Link to={`/videos/${match.params.id}/edit`}>Update Music Video</Link>
		</div>
	);
};

export default Video;
