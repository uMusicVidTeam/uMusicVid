import React, { useState, useEffect } from 'react';
import Video from './Video';
import Axios from 'axios';

function Home() {
	let [videos, setVideos] = useState([]);
	let [original, setOriginal] = useState([]);

	const filterVideos = (event) => {
		setVideos(original.filter((video) => video.genre === event.target.id));
	};

	useEffect(() => {
		Axios.get('https://umusicvid.herokuapp.com/api/videos').then((res) => {
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
