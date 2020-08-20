import React, { useState } from 'react';
import Create from './Create';
import About from './About';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';



function Header(props) {
	let [create, setCreate] = useState('none');
	let [about, setAbout] = useState('none');

	return (
		<header>
			<Navbar color='dark' dark>
				<Link to='/'>
					<h3>uMusicvid</h3>
				</Link>
				<button onClick={() => setCreate('flex')}>Add a video</button>
				<button onClick={() => setAbout('block')}>About</button>
				<Create setCreate={setCreate} create={create} />
				<About setAbout={setAbout} about={about} />
			</Navbar>
		</header>
	);
}





export default Header;
