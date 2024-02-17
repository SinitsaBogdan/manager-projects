import React from 'react';
import '../../assets/scss/index.scss';
import './App.scss';
import './AppMedia.scss';

import cardData from '../../data.json';

import { Card, Footer, Header, Task } from '..';

export default function App() {
	return (
		<div className='App'>
			<div className='App__panel_left'>
				<Task title='Задача № 1' description='Детальное описание задачи № 1' />
				<Task title='Задача № 2' description='Детальное описание задачи № 2' />
			</div>
			<div className='App__panel_right'>
				<Header />
				{cardData.map((card) => (
					<Card content={card} />
				))}
				<Footer />
			</div>
		</div>
	);
}
