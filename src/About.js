import React from 'react';

function About(props) {
    return (
        <div className='modal' style={{display: props.about}}>
            <p>The best app of all time</p>
            <button onClick={() => props.setAbout('none')}>CLOSE</button>
        </div>
    );
}

export default About;