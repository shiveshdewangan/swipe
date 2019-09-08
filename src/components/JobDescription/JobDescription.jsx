import React from 'react';
import ImageThumbnail from './ImageThumbnail/ImageThumbnail';
import JobTitle from './JobsTitle/JobTitle';
import CompanyName from './CompanyName/CompanyName';
import Rate from './Rate/Rate';
import WorkingDays from './WorkingDays/WorkingDays';

const JobDescription = () => {
	return (
		<>
			<div className='job-card'>
				<ImageThumbnail />

				<div className='job-details'>
					<JobTitle />
					<CompanyName />
					<Rate />
					<WorkingDays />
				</div>
			</div>
		</>
	);
};

export default JobDescription;
