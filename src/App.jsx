import react , {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';

function App(){

	const [addItem , setAddItem] = useState([]);

	const addNote = (note) =>{

		if(note.title == "" || note.content == ""){
			alert("Plese enter data");
		}
		else{

				setAddItem((preData) =>{

					return [...preData, note];
				});

				console.log(note);
			}
		}		

	const onDelete = (id) =>{

		setAddItem((olddata) =>

			olddata.filter((currdata , index) =>{

				return index !== id;

			})

		);

	};

	return(

		<>
			<Header/>
			// Hello
			<CreateNote passNote = {addNote}/>
			<div className = "note-container">
			{
				addItem.map((val , index) =>{

				return <Note 
					key = {index}
					id = {index}
					title = {val.title}
					content = {val.content}
					deleteItem = {onDelete}
					/>

				})
			}
			</div>
			<Footer/>

		</>

	);

}

export default App; 