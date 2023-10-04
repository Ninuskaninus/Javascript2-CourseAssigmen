export function editBtnModal() {
  const formContainer = document.getElementById("form-container");
  const editBtn = document.getElementById("edit-banner-btn");

  editBtn.addEventListener("click", () => {
    if (formContainer.style.display === "flex") {
      formContainer.style.display = "none"; // Hide the form
      editBtn.src = "/img/edit.png";
    } else {
      formContainer.style.display = "flex"; // Show the form
      editBtn.src = "/img/close.png";
    }
  });
}
