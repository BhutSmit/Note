import react from 'react';
import './App.css';	

function Footer(){

	const year = new Date();

	return(

		<>

			<div className = "footer">copyright {year.getFullYear()}</div>

		</>

	);
}

export default Footer;