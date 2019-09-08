import React from 'react';
import './image-thumbnail.css';

const ImageThumbnail = () => {
	return (
		<div className='profile-pic'>
			<img className='image-thumbnail' src='https://i.pravatar.cc/300' alt='profile-pic' />
		</div>
	);
};

export default ImageThumbnail;
