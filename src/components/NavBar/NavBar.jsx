/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.css';
import { toggleMenu } from '../../utilities/toggleMenu';

const NavBar = () => {
	return (
		<>
			<div className='navbar'>
				<ul>
					<li className='links'>Swipe Jobs</li>
					<li className='links'>My Account</li>
					<li className='links'>Sign Out</li>
				</ul>
			</div>
			<div className='mobile-container'>
				<div className='topnav'>
					<a href='#home' className='active'>
						Swipe Logo
					</a>
					<div id='myLinks'>
						<a href='#news'>Home</a>
						<a href='#contact'>My Account</a>
						<a href='#about'>Sign Out</a>
					</div>
					<a href='#' className='icon' onClick={() => toggleMenu('myLinks')}>
						<i className='fa fa-bars'></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default NavBar;
