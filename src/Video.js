import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-dontawesome';


function Video(props) {

	return (
		<div>
			<br></br>
			<h3 className='video-title'>{props.title}</h3>
					<div className='video'>
						<ReactPlayer controls width='40%' height='20vh' url={props.url} />
					</div>
			<div>
				<Link to={`/detail/${props.id}`}>
					<button>Vote</button>
				</Link>
			</div>
		</div>
	);
}

export default Video;
