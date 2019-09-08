import React, { useContext } from 'react';
import jobContext from '../../../context/job-context';
import './company-name.css';

const CompanyName = () => {
	const {
		company: { name }
	} = useContext(jobContext);
	return <div className='company-name'>{name}</div>;
};

export default CompanyName;
