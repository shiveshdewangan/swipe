import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import { hot } from 'react-hot-loader/root';
import './App.css';

const App = () => {
	return (
		<>
			<NavBar />
			<Header />
			<Container />
		</>
	);
};

export default hot(App);
