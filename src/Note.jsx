import react from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Note(props){

	const deleteNote = () =>{

		props.deleteItem(props.id);
	}

	return(

		<>

			<div className = "note">

				<h3 className = "note-title">{props.title}</h3>

				<p className = "note-content">{props.content}</p>

				<button className = "buttons" onClick = {deleteNote}><FontAwesomeIcon icon={faTrash}/></button>

			</div>

		</>

	);
}

export default Note;