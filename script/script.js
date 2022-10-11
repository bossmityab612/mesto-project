const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.profile__button-edit'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-exit'); //Кнопка закрытия попапа

const editButton = document.querySelector('.profile__button-edit')
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup-form_name');
const jobInput = document.querySelector('.popup-form_job');

openPopupButton.addEventListener('click', () => {
        popup.classList.add('popup_opened');
        popup.classList.add('popup_opened');
})

closePopupButton.addEventListener('click',() => {
        popup.classList.remove('popup_opened');
        popup.classList.remove('popup_opened');
});

editButton.addEventListener('click', () => {
        const userData = userInfo.getUserInfo();
        nameInput.value = userData.name;
        jobInput.value = userData.job;
      
        formValidators['profile'].resetValidation()
      
        profilePopup.open();
      });

// function formSubmitHandler (evt) {
//     evt.preventDefault();
// }

// popupForm.addEventListener('submit', formSubmitHandler);

