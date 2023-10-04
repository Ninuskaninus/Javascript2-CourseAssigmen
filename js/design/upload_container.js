import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();

export function uploadContainer() {
  const feedContainer = document.getElementById("feed-container");
  const uploadContainer = document.createElement("div");
  uploadContainer.classList.add("card", "mb-4");
  feedContainer.appendChild(uploadContainer);

  const uploadHead = document.createElement("div");
  uploadHead.classList.add("card-body", "d-flex", "align-content-center");
  uploadContainer.appendChild(uploadHead);

  const uploadProfilepic = document.createElement("img");
  uploadProfilepic.classList.add("rounded-circle", "me-4", "border");
  uploadProfilepic.src = myProfile.avatar;
  if (myProfile.avatar && myProfile.avatar.trim() !== "") {
    myProfile.src = myProfile.avatar;
  } else {
    uploadProfilepic.src = "/img/profile-placeholder.png";
  }

  uploadProfilepic.style.width = "50px";
  uploadProfilepic.style.height = "50px";
  uploadProfilepic.style.objectFit = "cover";
  uploadHead.appendChild(uploadProfilepic);

  const uploadHeadText = document.createElement("textarea");
  uploadHeadText.id = "upload-head-text";
  uploadHeadText.classList.add(
    "text-muted",
    "pt-3",
    "border-0",
    "w-100",
    "p-2",
    "upload-content"
  );
  uploadHeadText.placeholder = "What's on your mind?";
  uploadHead.appendChild(uploadHeadText);

  const uploadBody = document.createElement("div");
  uploadBody.classList.add("card-header");
  uploadContainer.appendChild(uploadBody);

  const uploadImageForm = document.createElement("form");
  uploadImageForm.id = "postForm";
  uploadImageForm.method = "post";
  const uploadImage = document.createElement("input");
  uploadImage.type = "text";
  uploadImage.id = "upload-image";
  uploadImage.name = "upload-image";
  uploadImage.placeholder = "Enter image URL";
  uploadImage.classList.add("form-control", "mb-2");

  uploadImageForm.appendChild(uploadImage);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add(
    "btn",
    "btn-primary",
    "float-end",
    "me-4",
    "mt-2",
    "submit-btn"
  );
  submitBtn.innerText = "Submit";
  submitBtn.action = "submit";

  uploadHeadText.addEventListener("input", () => {
    if (uploadHeadText.value.length > 0) {
      submitBtn.style.display = "block";
    } else {
      submitBtn.style.display = "none";
    }
  });
  uploadImageForm.appendChild(submitBtn);
  uploadBody.appendChild(uploadImageForm);
}
