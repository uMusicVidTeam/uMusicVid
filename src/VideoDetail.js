import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import Edit from './Edit.js';
import { Redirect } from 'react-router-dom';

function VideoDetail(props) {
	let [video, setVideo] = useState('');
	let [edit, setEdit] = useState('none');
    let [deleted, setDelete] = useState(false);
    let [title, setTitle] = useState('Loading')

	useEffect(() => {
		Axios.get(
			`https://umusicvid.herokuapp.com/api/videos/${props.match.params.id}`
		).then((video) => {
            console.log(video);
            setVideo(video.data);
            setTitle(video.data.title)
		});
	}, [props.match.params.id]);

	const handleVote = (event) => {
		const increment = event.target.id === 'up' ? 1 : -1;

		Axios.put(
			'https://umusicvid.herokuapp.com/api/videos/' + video._id,
			{
				url: video.url,
				title: video.title,
				artist: video.artist,
				genre: video.genre,
				score: video.score + increment,
			},
			{ new: true }
		).then((res) => {
			setVideo(res.data);
		});
	};

	const handleDelete = (event) => {
		event.preventDefault();
		Axios.delete(
			'https://umusicvid.herokuapp.com/api/videos/' + props.match.params.id
		).then(() => {
			setDelete(true);
		});
	};

	if (deleted) {
		return <Redirect to='/' />;
	}

	return (
		<div className='expVideo'>
			<h1>{title}</h1>
			<ReactPlayer url={video ? video.url : ''} />
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
