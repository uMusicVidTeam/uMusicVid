import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Edit from './Edit.js';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';

function VideoDetail(props) {
	let [video, setVideo] = useState('');
	let [edit, setEdit] = useState('none');
	let [deleted, setDelete] = useState(false);

	useEffect(() => {
		axios.get(`${APIURL}/videos/${props.match.params.title}`).then((video) => {
			setVideo(video.data[0]);
		});
	}, [props.match.params.id, props.match.params.title]);

	const handleVote = (event) => {
		const increment = event.target.id === 'up' ? 1 : -1;

		axios
			.put(
				`${APIURL}/videos/${props.match.params.id}`,
				{
					url: video.url,
					title: video.title,
					artist: video.artist,
					genre: video.genre,
					score: video.score + increment,
				},
				{ new: true }
			)
			.then((res) => {
				let pleaseWork = res.data.filter(
					(obj) => obj._id === props.match.params.id
				);
				setVideo(pleaseWork[0]);
			});
	};

	const handleDelete = (event) => {
		event.preventDefault();
		axios.delete(`${APIURL}/videos/${video._id}`).then(() => {
			setDelete(true);
		});
	};

	if (deleted) {
		return <Redirect to='/' />;
	}

	return (
		<div className='expVideo'>
			<h1>{video.title}</h1>
			<ReactPlayer url={video.url} />
			<button id='up' onClick={handleVote}>
				UP
			</button>
			<button id='down' onClick={handleVote}>
				DOWN
			</button>
			<button onClick={handleDelete}>DELETE</button>
			<button onClick={() => setEdit('flex')}>EDIT</button>
			<Edit
				url={video.url}
				artist={video.artist}
				title={video.title}
				genre={video.genre}
				id={video._id}
				edit={edit}
				setEdit={setEdit}
			/>
			<h2>Score: {video.score}</h2>
		</div>
	);
}

export default VideoDetail;
