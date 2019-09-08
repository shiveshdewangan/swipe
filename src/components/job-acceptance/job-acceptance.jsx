import React from 'react';
import Reject from './reject/reject';
import Accept from './accept/accept';
import './job-acceptance.css';

const JobAcceptance = () => {
	return (
		<div className='job-acceptance'>
			<Reject />
			<Accept />
		</div>
	);
};

export default JobAcceptance;
