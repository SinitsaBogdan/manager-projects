import React from 'react';
import './Card.scss';
import './CardMedia.scss';

import modulesData from '../../modules.json';

import { Description, Modul, Note } from '../';

export default function Card({ content }) {
	return (
		<div className='Card'>
			<div className='Card__header'>
				<p className='number'>{content.id}</p>
				<h2 className='Card__title'>{content.title}</h2>
				<p className='Card__type'>{content.site_type}</p>
				<div className='Card__modules'>
					{content.project_module.length > 0 &&
						content.project_module.map((m) => <Modul props={modulesData[m]} />)}
				</div>
			</div>

			<div className='Card__contents'>
				<Description content={content.description} />
				{content.note !== '' && <Note content={content.note} />}
			</div>

			<div className='Card__buttoms'>
				<div className='wrapper'>
					<p className='btn'>Рейтинг : {content.priority}</p>
					<p className='btn'>Статус : {content.execution_status}</p>
				</div>

				<div className='wrapper'>
					{content.url_doc !== '' && (
						<a className='btn' href={content.url_doc}>
							ДОКУМЕНТАЦИЯ
						</a>
					)}
					{content.site_pages !== '' && (
						<a className='btn' href={content.site_pages}>
							СТРАНИЦЫ
						</a>
					)}
					{content.site_components !== '' && (
						<a className='btn' href={content.site_components}>
							КОМПОНЕНТЫ
						</a>
					)}
					{content.data_base__table !== '' && (
						<a className='btn' href={content.data_base__table}>
							ТАБЛИЦЫ
						</a>
					)}
				</div>
				<div className='wrapper'>
					{content.url_git !== '' && (
						<a href={content.url_git} className='btn'>
							GIT
						</a>
					)}

					{content.url_task_board !== '' && (
						<a href={content.url_task_board} className='btn'>
							TASK BOARD
						</a>
					)}

					{content.url_figma !== '' && (
						<a target='_blank' href={content.url_figma} className='btn' rel='noreferrer'>
							FIGMA
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
