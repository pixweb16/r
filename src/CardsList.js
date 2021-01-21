import Card from './Card';

const CardsList = () => {
	return(

		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	)
}

export default CardsList;