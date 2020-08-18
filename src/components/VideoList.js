import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';
import Axios from 'axios';

const VideoList = (props) => {
	const [video, setVideo] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		Axios(`${APIURL}/videos`)
			.then((data) => {
				setVideo(data);
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	if (error) {
		return <div>Sorry, there was a problem getting the Music Video</div>;
	}

	if (video.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<ul>
			{video.map((video) => (
				<li key={video._id}>
					<Link to={`/video/${video._id}`}>{video.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default VideoList;
