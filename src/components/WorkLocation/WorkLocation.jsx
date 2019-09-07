/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './work-location.css';

const WorkLocation = () => {
	return (
		<>
			<p className='work-location'>
				Location:
				<br />
				<a href='#' className='address'>
					123 Main Street, Tacoma, WA 98409
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
