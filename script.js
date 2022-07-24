const openPopupButton = document.querySelector('.profile__description_button_edit');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__container_button_exit');
const popupButtonSubmit = popup.querySelector('.popup__add-button');

// Открытие попапа
function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
}

function openPopup() {
    const popupName = popup.querySelector('.popup__form_name');
    const popupJob = popup.querySelector('.popup__form_about');
    const editProfileTitle = document.querySelector('.profile__description-text_name');
    const editProfileSubtitle = document.querySelector('.profile__description-text_career');
    //определяем переменную для редактирования строк в попапе
    //присваивание value к тому, что будем вводить в строку
    popupName.value = editProfileTitle.textContent;
    popupJob.value = editProfileSubtitle.textContent;
    popup.classList.add('popup_opened');
}


// Закрытие попапа
function closePopup() {
    popup.classList.remove('popup_opened');
}