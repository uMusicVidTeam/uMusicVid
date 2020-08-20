import React, { useState, useEffect } from 'react';
import Video from './Video';
import axios from 'axios';
import { APIURL } from './config.js';
import { Link } from 'react-router-dom';

function Home() {
	let [videos, setVideos] = useState([]);
	let [original, setOriginal] = useState([]);

	const filterVideos = (event) => {
		setVideos(videos.filter((video) => video.genre === event.target.id));
	};

	useEffect(() => {
		axios.get(`${APIURL}/videos`).then((res) => {
			setVideos(
				res.data.sort(function (a, b) {
					return b.score - a.score;
				})
			);

			setOriginal(
				res.data.sort(function (a, b) {
					return b.score - a.score;
				})
			);
		});
	}, []);

	let display = videos.map((video) => {
		return (
			<div>
				<Video
					url={video.url}
					title={video.title}
					artist={video.artist}
					genre={video.genre}
					votes={video.votes}
					id={video._id}
					key={video._id}
				/>
				<h3>Score: {video.score}</h3>
			</div>
		);
	});

	return (
		<div>
			<nav>
				<Link to='/signup'>Signup</Link>
				<Link to='/login'>Login</Link>
				<button onClick={() => setVideos(original)} id='all'>
					All Videos
				</button>
				<button onClick={filterVideos} id='Pop'>
					Pop
				</button>
				<button onClick={filterVideos} id='Hip-Hop'>
					Hip-Hop
				</button>
				<button onClick={filterVideos} id='Rock'>
					Rock
				</button>
				<button onClick={filterVideos} id='Country'>
					Country
				</button>
			</nav>
			<div>{display}</div>
		</div>
	);
}

export default Home;
