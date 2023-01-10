// Массив Шесть карточек «из коробки»

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

// console.log(initialCards);


const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

const popupAddForm = document.querySelector('.popup-add-photo'); //Всплывающее окно
const openPopupButtonAddForm = document.querySelector('.profile__add-button'); //Кнопка открытия попапа (для формы добавления)
const closePopupButtonAddForm = document.querySelector('.popup__button-exit-addform'); //Кнопка закрытия попапа

//const photoSection = document.querySelector('.photo') //Секция с публикациями
//const publication = document.querySelector('.photo__pub'); // Публикация
const delPub = document.querySelector('.element__close'); // Кнопка удаления

const popupForm = document.querySelector('.popup__form'); //Поле формы
const nameInput = document.querySelector('.profile__text-name'); //Поле имени
const jobInput = document.querySelector('.profile__text-career'); //Поле профессии
const nameForm = document.querySelector('.popup__form-name'); // Форма заполнения имени
const jobForm = document.querySelector('.popup__form-job'); //Форма заполнения профессии

const containerPhoto = document.querySelector('.elements');

const createCard = (taskName) => {
	const templateForm = document.querySelector('#template');
	
	const element = templateForm.content.querySelector('.element').cloneNode(true); //Клонируем содержимое тега <template>
	containerPhoto.append(createCard(taskName));

	return element;
};

const renderCards = (taskName) => {
	containerPhoto.append(createCard(taskName));
};

containerPhoto.append(...initialCards.map((taskName) => {
	createCard(taskName);
}));

// sectionPhotoPub.addEventListener('submit', cards);

// Открытие и закрытие попапа

openPopupButton.addEventListener('click', () => {
	popup.classList.add('popup_opened');
	nameForm.value = nameInput.textContent;
	jobForm.value = jobInput.textContent;
});


closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

// Открытие и закрытие попапа (форма добавления фото)

openPopupButtonAddForm.addEventListener('click', () => {
  popupAddForm.classList.add('popup_opened');
});

closePopupButtonAddForm.addEventListener('click', () => {
  popupAddForm.classList.remove('popup_opened');
});

// Обработчик формы

function formSubmitHandler(evt) {
	evt.preventDefault();
	nameInput.textContent = nameForm.value;
	jobInput.textContent = jobForm.value;

	popup.classList.remove('popup_opened');
}
popupForm.addEventListener('submit', formSubmitHandler);

// Удаление публикации

// delPub.addEventListener('click', function() {
//         delPub.closest('.photo__pub').remove();
// });

// delPub.forEach(function (el) {
// 	el.addEventListener('click', (evt) => {
// 		delPub.closest('.photo__pub').remove();
// 	});
// });
