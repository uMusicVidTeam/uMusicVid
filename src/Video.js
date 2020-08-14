import React from 'react';
import ReactPlayer from 'react-player';

function Video(props) {
	return (
		<div>
			<ReactPlayer controls url='https://www.youtube.com/watch?v=3NXBgSCSrIk' />
		</div>
	);
}

export default Video;
