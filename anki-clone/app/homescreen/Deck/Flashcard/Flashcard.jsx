



const Card = ({data}) =>{

const {front, back} = data || {};
	return(
		<div>
		{front}
		{back}
		this is the card component
		</div>

	);
}


export default Card
