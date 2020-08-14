import React, {useState} from 'react';
import ReactPlayer from 'react-player';

function Video(props) {
	return (
		<div>
			<div className='video'>
				<ReactPlayer
					controls
					url='https://www.youtube.com/watch?v=3NXBgSCSrIk'
				/>
			</div>
			
		</div>
	);
}

export default Video;
