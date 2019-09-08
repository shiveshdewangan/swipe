import React, { useContext } from 'react';
import jobContext from '../../context/JobContext';
import { formattedWorkingDays } from '../../utilities/formateDate';
import './work-timings.css';

const WorkTimings = () => {
	const { shifts } = useContext(jobContext);
	const formattedWorkingDaysInPST = formattedWorkingDays(shifts);
	return (
		<>
			<ul className='work-timings'>
				{formattedWorkingDaysInPST.map((shift, index) => {
					if (index < 5) return <li key={index}>{shift}</li>;
				})}
			</ul>
			<div className='horizontal-line'>
				<hr />
			</div>
		</>
	);
};

export default WorkTimings;
