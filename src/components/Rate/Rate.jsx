import React, { useContext } from 'react';
import jobContext from '../../context/JobContext';
import './rate.css';

const RatePerHour = () => {
	const { wagePerHourInCents } = useContext(jobContext);
	const wagePerHourInDollars = `$${(wagePerHourInCents / 100.0).toFixed(2)}/hour`;
	return <div className='rate'>{wagePerHourInDollars}</div>;
};

export default RatePerHour;
