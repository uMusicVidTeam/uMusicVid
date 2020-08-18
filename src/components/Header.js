import React, { useState } from 'react';
import VideoCreate from './Create';
import About from './About';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const [create, setCreate] = useState('none');
	const [about, setAbout] = useState('none');

	return (
		<header>
			<Link to='/'>
				<h3>uMusicvid</h3>
			</Link>
			<button onClick={() => setCreate('flex')}>Add a video</button>
			<button onClick={() => setAbout('block')}>About</button>
			<VideoCreate setCreate={setCreate} create={create} />
			<About setAbout={setAbout} about={about} />
		</header>
	);
}

export default Header;
