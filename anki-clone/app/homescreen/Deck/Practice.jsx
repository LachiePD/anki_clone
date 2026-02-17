import {useState} from 'react';
import Flashcard from './Flashcard/Flashcard.jsx';


const Practice = ({cardList}) =>{

	const [activeCardIndex, setActiveCardIndex] = useState(0);

	const buildCard = () =>{
		
		const data = cardList[activeCardIndex];

		return (
			<Flashcard data={data}/>
		);

	}

	return(
		<div>
		{buildCard()}
		</div>)

}


export default Practice;
