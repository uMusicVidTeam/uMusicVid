import React, { useState, useEffect } from 'react';
import Video from './Video';
import Axios from 'axios';

function Home() {
	let [videos, setVideos] = useState([]);
	let [original, setOriginal] = useState([]);
	let [search, setSearch] = useState('');

	const filterVideos = (event) => {
		setVideos(original.filter((video) => video.genre === event.target.id));
	};

	const handleSearch = (event) => {
		event.preventDefault();
		setVideos(
			original.filter(
				(video) =>
					video.title.toLowerCase().includes(search) ||
					video.artist.toLowerCase().includes(search)
			)
		);
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
					index={videos.indexOf(video)}
				/>
				<h2>Score: {video.score}</h2>
			</div>
		);
	});

	return (
		<div>
			<br></br>
			<form className='filters' onSubmit={handleSearch}>
				<input
					className='search-input'
					type='text'
					placeholder='search by title or artist'
					onChange={(event) =>
						setSearch(event.target.value.toLowerCase())
					}></input>
				<button type='submit'>Search</button>
			</form>
			<br></br>
			<h2>Filter by genre:</h2>
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
				<button onClick={filterVideos} id='RnB'>
					RnB
				</button>
				<button onClick={filterVideos} id='Rock'>
					Rock
				</button>
				<button onClick={filterVideos} id='Metal'>
					Metal
				</button>
				<button onClick={filterVideos} id='Country'>
					Country
				</button>
				<button onClick={filterVideos} id='Other'>
					Other
				</button>
			</nav>
			<div>{display}</div>
		</div>
	);
}

export default Home;
