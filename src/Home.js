import React, {useState, useEffect} from 'react';
import Video from './Video';
import Axios from 'axios'

function Home() {

	let [videos, setVideos] = useState([])

	useEffect(() => {
		Axios.get('https://umusicvid.herokuapp.com/api/videos').then(
			(res) => {
				setVideos(
					res.data.map((video) => {
						return (
							<Video
								url={video.url}
								title={video.title}
								artist={video.artist}
								genre={video.genre}
								votes={video.votes}
								id={video._id}
								key={video._id}
							/>
						);
					})
				);
			}
		);
	}, []);
		
	

	return (
		<div>
			{videos}
		</div>
	);
}

export default Home;
