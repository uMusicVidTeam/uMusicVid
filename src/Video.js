import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios'
import { Route, Link } from 'react-router-dom';

function Video(props) {

	


	return (
		<div>
			<h3>{props.title}</h3>
			<div className='video'>
				<ReactPlayer
					controls
					width='30%'
					height='180px'
					url={props.url}
				/>
			</div>
			<div>

				<Link to={`/detail/${props.title}`}><button>Vote</button></Link>
			</div>
		</div>
	);
}

export default Video;
