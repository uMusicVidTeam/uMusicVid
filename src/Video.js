import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios'

function Video(props) {

	const handleUp = (event) => {
		event.preventDefault();
		console.log(event.target.id)
		Axios.put('http://localhost:8080/api/videos/' + props.id, {url: props.url, title: props.title, artist: props.artist, genre: props.genre, votes: {up: props.votes.up + 1, down: props.votes.down}})
		.then((res) => console.log(res))
	};


	return (
		<div>
			<h3>{props.title}</h3>
			<div className='video'>
				<ReactPlayer
				light='true'
				playIcon='none'
					controls
					width='180px'
					height='180px'
					url={props.url}
				/>
			</div>
			<div>
				<button id={props.title} onClick={handleUp}>UP</button>
				<button>DOWN</button>
				<button>DELETE</button>
				<button>EDIT</button>
			</div>
			
		</div>
	);
}

export default Video;
