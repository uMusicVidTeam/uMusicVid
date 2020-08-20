import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function Video(props) {

	return (
		<div>
			{/* <hr></hr> */}
			<br></br>
	<h3 className='video-title'>{props.index + 1}. {props.title}</h3>
				<container>
					<div className='video'>
						<ReactPlayer controls width='45vw' height='30vh' url={props.url} />
					</div>
				</container>
			<div>
				<Link to={`/detail/${props.title}`}>
					<button>Vote</button>
				</Link>
			</div>
		</div>
	);
}

export default Video;
