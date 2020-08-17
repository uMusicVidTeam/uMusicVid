import React, {useState} from 'react';
import ReactPlayer from 'react-player';

function Video(props) {
	return (
		<div>
			<div className='video'>
				<ReactPlayer
					controls
					url={props.url}
				/>
			</div>
			
		</div>
	);
}

export default Video;
