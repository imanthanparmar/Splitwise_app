import React from 'react';
import ReactConfetti from 'react-confetti';
const Confetti: React.FC = () => {
	return (
		<div className='confetti-continer'>
			<ReactConfetti width={100} height={100} />
		</div>
	);
};

export default Confetti;
