const popupOpened = document.querySelector('.popup'); //Всплывающее окно
const popup = document.querySelector('.popup__container');
const openPopupButton = document.querySelectorAll('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

openPopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupOpened.classList.add('popup__opened');
        popup.classList.add('popup__opened');
    })
});

closePopupButton.addEventListener('click',() => {
        popupOpened.classList.remove('popup__opened');
        popup.classList.remove('popup__opened');
    });
