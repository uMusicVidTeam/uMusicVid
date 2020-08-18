import React, { useState } from 'react';
import Create from './components/Create';
import About from './About';

function Header(props) {
	let [create, setCreate] = useState('none');
	let [about, setAbout] = useState('none');

	return (
		<header>
			<h3>uMusicvid</h3>
			<button onClick={() => setCreate('flex')}>Add a video</button>
			<button onClick={() => setAbout('block')}>About</button>
			<Create setCreate={setCreate} create={create} />
			<About setAbout={setAbout} about={about} />
		</header>
	);
}

export default Header;
