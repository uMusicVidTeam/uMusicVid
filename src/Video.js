import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios'
import { Route, Link } from 'react-router-dom';

function Video(props) {
	const navStyle = {
		color: 'white',
	};


	


	return (
		<div>
			<h3>{props.title}</h3>
			<Link style={navStyle} to='/Largevideos'>
				<container>
					<hr></hr>
					<div className='video'>
						<ReactPlayer
							controls
							width='180px'
							height='180px'
							url={props.url}
						/>
					</div>
				</container>
			</Link>
			<div>
				<Link to={`/detail/${props.title}`}>
					<button>Vote</button>
				</Link>
			</div>
			
		</div>
	);
}

export default Video;
