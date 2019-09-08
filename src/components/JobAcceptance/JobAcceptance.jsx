import React from 'react';
import NoThanks from './NoThanks/NoThanks';
import TakeIt from './TakeIt/TakeIt';

const JobAcceptance = () => {
	return (
		<div className='accept-or-reject'>
			<NoThanks />
			<TakeIt />
		</div>
	);
};

export default JobAcceptance;
