import React, { useContext } from 'react';
import jobContext from '../../../context/JobContext';
import { contractDuration } from '../../../utilities/formateDate';
import './working-days.css';

const WorkingDays = () => {
	const { shifts } = useContext(jobContext);
	const { contractStartDate, contractEndDate } = contractDuration(shifts);
	return (
		<div className='working-days'>
			{contractStartDate} - {contractEndDate}
		</div>
	);
};

export default WorkingDays;
