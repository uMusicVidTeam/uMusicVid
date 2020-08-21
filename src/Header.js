import React, { useState } from 'react';
import Create from './Create';
import About from './About';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

function Header(props) {
	let [create, setCreate] = useState('none');
	let [about, setAbout] = useState('none');
	const [modalShow, setModalShow] = useState(false);

	return (
		<header>
			<Navbar style={{ display: 'inline' }}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h3 className='app-title'>uMusicvid</h3>
				</Link>
				<Link to='/signup'>Signup</Link>
				<br />
				<Link to='/login'>Login</Link>
				<br />
				<button
					onClick={() => {
						if (!sessionStorage.token) {
							return (window.location.href = '/signup');
						} else {
							setCreate('flex');
							setModalShow(true);
						}
					}}>
					Add a video
				</button>
				<button onClick={() => setAbout('block')}>About</button>
				<Create
					setCreate={setCreate}
					create={create}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<About setAbout={setAbout} about={about} />
			</Navbar>
		</header>
	);
}

export default Header;
