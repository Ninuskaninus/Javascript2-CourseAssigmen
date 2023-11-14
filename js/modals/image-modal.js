const modalContainer = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");

export function imageModal() {
  modalContainer.style.display = "flex";
  modalImg.src = this.src;

  modalContainer.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
}
