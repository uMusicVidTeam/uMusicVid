import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import Edit from './Edit.js'
import {Redirect} from 'react-router-dom';

function VideoDetail (props) {

let [video, setVideo] = useState('')
let [edit, setEdit] = useState('none')
let [deleted, setDelete] = useState('false')
let [score, setScore] = useState('loading')

const handleUp = (event) => {
    // event.preventDefault();
    Axios.get(
			`https://umusicvid.herokuapp.com/api/videos/${props.match.params.title}`
		).then((video) => {
			setVideo(video.data[0]);

		});
	
	Axios.put('https://umusicvid.herokuapp.com/api/videos/' + video._id, {
		url: video.url,
		title: video.title,
		artist: video.artist,
		genre: video.genre,
		votes: { up: video.votes.up + 1, down: video.votes.down },
	}).then((res) => setScore(video.votes.up - video.votes.down));
};

const handleDelete = (event) => {
    event.preventDefault();
    Axios.delete('https://umusicvid.herokuapp.com/api/videos/' + props.match.params.title)
    .then((res) => setDelete('true')
    )
}

    useEffect(() => {
        Axios.get(`https://umusicvid.herokuapp.com/api/videos/${props.match.params.title}`)
        .then(video => {
            setVideo(video.data[0]);
            setScore(video.data[0].votes.up - video.data[0].votes.down)
        })
    }, [])

    // console.log(video);
    
    // console.log(video.votes)

    return (
			<div>
				<h1>{props.match.params.title}</h1>
				<ReactPlayer url={video.url} />
				<button id={props.match.params.title} onClick={handleUp}>
					UP
				</button>
				<button>DOWN</button>
				<button onClick={handleDelete}>DELETE</button>
				<button onClick={() => setEdit('flex')}>EDIT</button>
                <h2></h2>
                <Edit url={video.url} artist={video.artist} title={video.title} genre={video.genre} id={video._id} edit={edit} setEdit={setEdit}/>
                <h2>Score: {score}</h2>
			</div>
        );
        
}


export default VideoDetail;