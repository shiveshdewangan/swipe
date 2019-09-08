import React from 'react';
import JobDescription from '../JobDescription/JobDescription';
import Agreement from '../Agreement/Agreement';
import Shifts from '../Shifts/Shifts';
import Location from '../Location/Location';
import JobAcceptance from '../JobAcceptance/JobAcceptance';

const Container = () => {
	return (
		<>
			<div className='container'>
				<JobDescription />
				<Agreement />
				<Shifts />
				<Location />
				<JobAcceptance />
			</div>
		</>
	);
};

export default Container;
