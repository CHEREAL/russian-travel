const aboutButton = document.querySelector('.navigation__button_type_about');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

const toggleOpenPopup = () => {
    popup.classList.toggle('popup__opened');
}
const handleAboutButtonClick = () => {
  toggleOpenPopup();
};
const handleCloseButtonClick = () => {
  toggleOpenPopup();
};
const handleOverlayClick = (event) => {
  
  if(event.target ===  event.currentTarget) {
    toggleOpenPopup();
  }
};

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlayClick);