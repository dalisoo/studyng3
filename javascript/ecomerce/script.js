const openModalButton = document.getElementById('open-modal')
const closeModalButton = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const fade = document.getElementById('fade')

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

