const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа
const popupAddForm = document.querySelector('.popup-add-photo'); //Всплывающее окно
const openPopupButtonAddForm = document.querySelectorAll('.profile__add-button'); //Кнопка открытия попапа (для формы добавления)
const closePopupButtonAddForm = document.querySelectorAll('.popup__button-exit'); //Кнопка закрытия попапа


const deletePub = document.querySelectorAll('.photo__trash'); // Кнопка удаления
const publication = document.querySelectorAll('.photo__pub'); // Публикация

const like = document.querySelectorAll('.photo__like'); // Переключашка для лайков

const popupForm = document.querySelector('.popup__form'); //Поле формы
const nameInput = document.querySelector('.profile__text-name'); //Поле имени
const jobInput = document.querySelector('.profile__text-career'); //Поле профессии
const nameForm = document.querySelector('.popup__form-name'); // Форма заполнения имени
const jobForm = document.querySelector('.popup__form-job'); //Форма заполнения профессии


// Функция для лайков

like.forEach(function(el) {
        el.addEventListener('click', (evt) => {
                evt.target.classList.toggle('photo__like_active');
        });
});


// Открытие и закрытие попапа

openPopupButton.addEventListener('click', () => {
        popup.classList.add('popup_opened');
        nameForm.value = nameInput.textContent;
        jobForm.value = jobInput.textContent;
});


closePopupButton.addEventListener('click',() => {
        popup.classList.remove('popup_opened');
});

// Открытие и закрытие попапа (форма добавления фото)

openPopupButtonAddForm.addEventListener('click', () => {
        openPopupButton();
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

// deletePub.addEventListener('click',() => {
//         publication.classList.remove('.photo__pub');
// });
