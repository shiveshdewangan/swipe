import React, { useContext } from 'react';
import jobContext from '../../context/JobContext';
import './navbar.css';

const NavBar = () => {
	console.log('jobContext', useContext(jobContext));
	return (
		<div className='navbar'>
			<ul>
				<li>Swipe Jobs</li>
				<li>My Account</li>
				<li>Sign Out</li>
			</ul>
		</div>
	);
};

export default NavBar;
