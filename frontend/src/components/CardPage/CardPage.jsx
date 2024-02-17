import React from 'react';
import './CardPage.scss';
import './CardPageMedia.scss';

export default function CardPage({ name, url }) {
	return (
		<div className='CardPage'>
			<h2 className='CardPage__name'>{name}</h2>
			<p className='CardPage__url'>{url}</p>
		</div>
	);
}
