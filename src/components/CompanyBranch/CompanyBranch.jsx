import React from 'react';
import './company-branch.css';

const CompanyBranch = () => {
	return (
		<>
			<p className='company-branch'>
				Branch: <br /> Tacoma <br /> <span className='contact-number'>(253) 922-4240</span>
			</p>
			<div className='horizontal-line'>
				<hr />
			</div>
		</>
	);
};

export default CompanyBranch;
