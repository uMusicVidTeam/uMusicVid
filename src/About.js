import React from 'react';

function About(props) {
	return (
		<div className='modal' style={{ display: props.about }}>
			<h1>Welcome to uMusicVid!</h1>
			<h2>A democratic ranking of the world's favorite music videos</h2>
			<h3>
				Creators: Isaac Romano, Noah Jarzab, Ime Udosen, and Joshua Israel
			</h3>
			<p>
				Don't like how the rankings look? Exercise your right to vote and make
				your voice heard! Can't find your favorite video? Click on create and
				add it to our database!
			</p>
			<button onClick={() => props.setAbout('none')}>CLOSE</button>
		</div>
	);
}

export default About;
