import React from 'react';
import NavBar from './components/NavBar/NavBar';
import JobsHeader from './components/JobsHeader/JobsHeader';
import ImageThumbnail from './components/ImageThumbnail/ImageThumbnail';
import JobTitle from './components/JobsTitle/JobTitle';
import CompanyName from './components/CompanyName/CompanyName';
import Rate from './components/Rate/Rate';
import WorkingDays from './components/WorkingDays/WorkingDays';
import Agreement from './components/Agreement/Agreement';
import WorkTimings from './components/WorkTimings/WorkTimings';
import WorkLocation from './components/WorkLocation/WorkLocation';
import CompanyBranch from './components/CompanyBranch/CompanyBranch';
import TakeIt from './components/TakeIt/TakeIt';
import NoThanks from './components/NoThanks/NoThanks';
import { hot } from 'react-hot-loader/root';
import './App.css';

const App = () => {
	return (
		<>
			<NavBar />
			<JobsHeader />
			<div className='container'>
				<div className='profile-pic'>
					<ImageThumbnail />
				</div>
				<div className='job-details'>
					<JobTitle />
					<CompanyName />
					<Rate />
					<WorkingDays />
				</div>
				{/* <Agreement />
				<WorkTimings />
				<WorkLocation />
				<CompanyBranch />
				<TakeIt />
				<NoThanks /> */}
			</div>
		</>
	);
};

export default hot(App);
