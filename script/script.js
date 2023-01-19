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

const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

const popupAddForm = document.querySelector('.popup-add-photo'); //Всплывающее окно
const openPopupButtonAddForm = document.querySelector('.profile__add-button'); //Кнопка открытия попапа (для формы добавления)
const closePopupButtonAddForm = document.querySelector('.popup__button-exit-addform'); //Кнопка закрытия попапа

const popupForm = document.querySelector('.popup__form'); //Поле формы
const nameInput = document.querySelector('.profile__text-name'); //Поле имени
const jobInput = document.querySelector('.profile__text-career'); //Поле профессии

const nameForm = document.querySelector('.popup__form-name'); // Форма заполнения имени
const jobForm = document.querySelector('.popup__form-job'); //Форма заполнения профессии

const titleCard = document.querySelector('.element__description-text'); //Поле названия карточки 
const linkCard = document.querySelector('.element__photo'); //Поле фотографии в карточке

const titleForm = document.querySelector('.popup__add-title'); // Форма добавления названия карточки
const linkForm = document.querySelector('.popup__link-image'); // Форма добавления фотографии карточки
const saveButton = document.querySelector('.popup__create-button'); //Кнопка создания новой карточки

const openPhoto = document.querySelector('.element'); //Сама карточка
const popupPhotoOpen = document.querySelector('.image'); //Всплывающее окно картинки
const openPopupButtonPhotoCard = document.querySelector('.element__photo'); //Кнопка открытия попапа с картинкой
const closePopupButtonPhotoCard = document.querySelector('.popup__button-exit-image'); //Кнопка закрытия попапа



// Открытие и закрытие попапа
openPopupButton.addEventListener('click', () => {
	popup.classList.add('popup_opened');
	nameForm.value = nameInput.textContent;
	jobForm.value = jobInput.textContent;
});

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

// Обработчик формы изменения профиля
function formSubmitHandler(evt) {
	evt.preventDefault();
	nameInput.textContent = nameForm.value;
	jobInput.textContent = jobForm.value;
	
	popup.classList.remove('popup_opened');
}
popupForm.addEventListener('submit', formSubmitHandler);


// Открытие и закрытие попапа (форма добавления фото)
openPopupButtonAddForm.addEventListener('click', () => {
  popupAddForm.classList.add('popup_opened');
});

closePopupButtonAddForm.addEventListener('click', () => {
  popupAddForm.classList.remove('popup_opened');
});


// Открытие и закрытие попапа (Картинка)

// openPopupButtonPhotoCard.addEventListener('click', () => {
//   popupPhotoOpen.classList.add('popup_opened');
// });

// closePopupButtonPhotoCard.addEventListener('click', () => {
//   popupPhotoOpen.classList.remove('popup_opened');
// });


// Функция добавления карточки
function createCard(evt) {
	evt.preventDefault();
	sectionElements.prepend(newElement);
	
	nameInput.textContent = nameForm.value;
	jobInput.textContent = jobForm.value;

	popup.classList.remove('popup_opened');

	renderCards()
}
popupAddForm.addEventListener('submit', createCard);


// Создание карточек на странице через шаблонный тег
const containerPhoto = document.querySelector('.elements');
const templateForm = document.querySelector('#template').content.querySelector('.element');

const renderCards = (title) => {
	const templateForm = document.querySelector('#template');
	const element = templateForm.content.querySelector('.element').cloneNode(true); //Клонируем содержимое тега <template>
	element.querySelector('.element__photo').src = title.link;
	element.querySelector('.element__description-text').textContent = title.name;
	containerPhoto.append(element);
	addLike(element);
	removeCards(element);
	return;
};


// Функция удаления карточки
const card = document.querySelector('.element');
const removeCards = (elem) => {
	const delCard = elem.querySelector('.element__del');
	delCard.addEventListener('click', function() {
		delCard.closest('.element').remove();
	});
};


// Функция для лайков
const addLike = (elem) => {
	const like = elem.querySelectorAll('.element__like');
	like.forEach(function(el) {
		el.addEventListener('click', function(evt) {
			evt.target.classList.toggle('element__like_active');
		});
	});
};
	
containerPhoto.append(initialCards.map((taskName) => {
	renderCards(taskName);
}));

containerPhoto.addEventListener('submit', initialCards);

