const popupOpened = document.querySelector('.popup'); //Всплывающее окно
const popup = document.querySelector('.popup__container');
const openPopupButton = document.querySelectorAll('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup-form-name');
const jobInput = document.querySelector('.popup-form-job');

openPopupButton.forEach((button) => {
        button.addEventListener('click', (popup) => {
                popup.preventDefault();
        popupOpened.classList.add('popup__opened');
        popup.classList.add('popup__opened');
    })
});

closePopupButton.addEventListener('click',() => {
        popupOpened.classList.remove('popup__opened');
        popup.classList.remove('popup__opened');
});

function formSubmitHandler (evt) {
    evt.preventDefault();
}

popupForm.addEventListener('submit', formSubmitHandler);
