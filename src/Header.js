import React, { useState } from 'react';
import Create from './Create';
import About from './About';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

function Header(props) {
	let [create, setCreate] = useState('none');
	let [about, setAbout] = useState('none');
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<header>
			<Navbar color='dark' dark>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h3 className='app-title'>uMusicvid</h3>
				</Link>
				<button onClick={() => {setCreate('flex'); setModalShow(true)}}>Create</button>
				<button onClick={() => setAbout('block')}>About</button>
				<Create setCreate={setCreate} create={create} show={modalShow} onHide={() => setModalShow(false)} />
				<About setAbout={setAbout} about={about} />
			</Navbar>
		</header>
	);
}

export default Header;
