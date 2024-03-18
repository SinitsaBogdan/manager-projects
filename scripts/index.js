import { initialCards } from './data-figma.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.content__list');

const createCard = function appendCard(card) {
	if (card.id === undefined) return;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector('.card__priority').textContent = card.priority;
	cardElement.querySelector('.card__number').textContent = card.id;

	cardElement.querySelector('.card__title').textContent = card.title;
	cardElement.querySelector('.card__description').textContent = card.description;
	cardElement.querySelector('.card__note').textContent = card.note;

	cardElement.querySelector('.card__btn-figma').href = card.figma;
	cardElement.querySelector('.card__btn-git').href = card.git;
	cardElement.querySelector('.card__btn-task').href = card.task;
	cardElement.querySelector('.card__btn-doc').href = card.doc;

	cardsList.append(cardElement);
};

function viewCards(list) {
	list.filter((card) => card.id != null).forEach((el) => createCard(el));
}

viewCards(initialCards);
