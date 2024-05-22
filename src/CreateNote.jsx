import react , {useState} from 'react';
import './App.css';

function CreateNote(props){

	const charlimit = 100;

	const [charLeft , setCharLeft] = useState(100);

	const [expand , setExpand] = useState(false);

	const [note , setNote] = useState({

		title: '',
		content: '',

	});

	const inputEvent = (e) =>{

		const {value , name} = e.target;

		setCharLeft(charlimit - note.content.length - 1);

	    console.log(charLeft);

		setNote((preData) =>{
			return{ 
				...preData,
				[name]: value,
			}	
		});
	}

	const addEvent = (e) =>{

		props.passNote(note);
		setNote({
			title: '',
			content: '',
		})
	}

	const expandIt = () =>{

		setExpand(true);
	}

	const btoNormal = () =>{

		setExpand(false);
	}

	return(

		<>

			<div className = "main-note" onDoubleClick = {btoNormal}>

				<form className = "container-input">

					{expand?<input type = "text" className = "title" name = "title" value = {note.title} autocomplete = "off" onChange = {inputEvent} placeholder = "Title" />:null}
					<textarea rows = "" cols = "" name = "content" value = {note.content} onChange = {inputEvent} maxlength = "100" onClick = {expandIt} placeholder = "Write a note" />
					{expand?<input type = "button" className = "button" value = "+" onClick = {addEvent}/>:null}
					<div style = {{color: "#ffffff"}}>{charLeft}/100</div>

				</form>

			</div>

		</>

	);
}

export default CreateNote;