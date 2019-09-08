import React from 'react';
import ImageThumbnail from './job-thumbnail/job-thumbnail';
import JobTitle from './job-title/job-title';
import CompanyName from './company-name/company-name';
import Rate from './rate/rate';
import JobDuration from './job-duration/job-duration';

const JobDescription = () => {
	return (
		<>
			<div className='job-card'>
				<ImageThumbnail />

				<div className='job-details'>
					<JobTitle />
					<CompanyName />
					<Rate />
					<JobDuration />
				</div>
			</div>
		</>
	);
};

export default JobDescription;
