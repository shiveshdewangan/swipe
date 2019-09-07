/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import jobContext from '../../context/JobContext';
import './work-location.css';

const WorkLocation = () => {
	const {
		company: { address }
	} = useContext(jobContext);
	return (
		<>
			<p className='work-location'>
				Location:
				<br />
				<a href='#' className='address'>
					{address}
				</a>
			</p>
			<br />
			<div className='horizontal-line'>
				<hr />
			</div>
		</>
	);
};

export default WorkLocation;
