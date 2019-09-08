import React, { useContext } from 'react';
import jobContext from '../../../context/job-context';
import { contractDuration } from '../../../utilities/formateDate';
import './job-duration.css';

const JobDuration = () => {
	const { shifts } = useContext(jobContext);
	const { contractStartDate, contractEndDate } = contractDuration(shifts);
	return (
		<div className='job-duration'>
			{contractStartDate} - {contractEndDate}
		</div>
	);
};

export default JobDuration;
