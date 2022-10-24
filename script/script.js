const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

const popupForm = document.querySelector('.popup__form'); //Поле формы
const nameInput = document.querySelector('.profile__text-name'); //Поле имени
const jobInput = document.querySelector('.profile__text-career'); //Поле профессии
const nameForm = document.querySelector('.popup-form_name'); // Форма заполнения имени
const jobForm = document.querySelector('.popup-form_job'); //Форма заполнения профессии


openPopupButton.addEventListener('click', () => {
        popup.classList.add('popup_opened');
})

closePopupButton.addEventListener('click',() => {
        popup.classList.remove('popup_opened');
});

output.textContent = number;

function formSubmitHandler(evt) {
        evt.preventDefault();
        nameInput.textContent = nameForm.value;
        jobInput.textContent = jobForm.value;

        popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', formSubmitHandler);

