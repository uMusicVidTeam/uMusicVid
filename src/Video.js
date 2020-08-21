import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function Video(props) {
	return (
		<div>
			<br></br>
			<h3 className='video-title'>
				{props.index + 1}. {props.title}
			</h3>
			<div className='video'>
				<ReactPlayer controls width='40%' height='300px' url={props.url} />
			</div>
			<div>
				{!sessionStorage.token ? (
					<Link to='/signup'>SignUp to Vote</Link>
				) : (
					<Link to={`/detail/${props.id}`}>
						<button>Vote</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Video;
