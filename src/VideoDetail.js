import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import Edit from './Edit.js'

function VideoDetail (props) {
    console.log(props.match.params.title)

let [video, setVideo] = useState('')
let [edit, setEdit] = useState('none')

const handleUp = (event) => {
	event.preventDefault();
	console.log(event.target.id);
	Axios.put('https://umusicvid.herokuapp.com/api/videos/' + props.id, {
		url: props.url,
		title: props.title,
		artist: props.artist,
		genre: props.genre,
		votes: { up: props.votes.up + 1, down: props.votes.down },
	}).then((res) => console.log(res));
};

const handleDelete

    useEffect(() => {
        Axios.get(`https://umusicvid.herokuapp.com/api/videos/${props.match.params.title}`)
        .then(video => {
            console.log(video);
            setVideo(video.data[0]);
        })
    }, [])
    
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
                <Edit url={video.url} artist={video.artist} title={video.title} genre={video.genre} id={video._id} edit={edit} setEdit={setEdit}/>
			</div>
		);
}

export default VideoDetail;