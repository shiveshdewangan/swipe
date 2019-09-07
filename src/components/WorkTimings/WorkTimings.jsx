import React, { useContext } from 'react';
import jobContext from '../../context/JobContext';
import moment from 'moment-timezone';
import { isWeekend, format } from 'date-fns';
import './work-timings.css';

const WorkTimings = () => {
	const { shifts } = useContext(jobContext);
	const shiftEndDates = shifts.map((shift) => shift.endDate);
	const formattedShiftEndDates = shiftEndDates
		.map((shift) =>
			moment(shift)
				.tz('America/Los_Angeles')
				.format('ddd, MMM D, h:mm:ss a')
		)
		.filter((day) => !day.includes('Sun') && !day.includes('Sat'));
	console.log('formattedShiftEndDates', formattedShiftEndDates);
	return (
		<>
			<ul className='work-timings'>
				{formattedShiftEndDates.map((shift, index) => {
					if (index < 5) return <li>{shift}</li>;
				})}
				{/* <li>Mon, Sep 5 8:00 AM PST</li>
				<li>Mon, Sep 5 8:00 AM PST</li>
				<li>Mon, Sep 5 8:00 AM PST</li>
				<li>Mon, Sep 5 8:00 AM PST</li>
				<li>Mon, Sep 5 8:00 AM PST</li> */}
			</ul>
			<div className='horizontal-line'>
				<hr />
			</div>
		</>
	);
};

export default WorkTimings;

// const { shifts } = useContext(jobContext);
// const shiftEndDates = shifts.map((shift) => shift.endDate);
// const formattedShiftEndDates = shiftEndDates.map((shift) => moment(shift).format("ddd, MMM Do YYYY, h:mm:ss a"));
// console.log('formattedShiftEndDates', formattedShiftEndDates);
