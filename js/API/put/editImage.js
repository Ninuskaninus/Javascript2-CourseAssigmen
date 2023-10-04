import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();
const username = myProfile.name;

export function editImage() {
  const base_url =
    "https://api.noroff.dev/api/v1/social/profiles/" + username + "/media";
  const accessToken = localStorage.getItem("accessToken");
  const formImage = document.getElementById("image-form");
  const inputImage = document.getElementById("image-input");

  formImage.addEventListener("submit", async function (event) {
    event.preventDefault();

    const imageValue = inputImage.value;

    const newImage = {
      avatar: imageValue,
    };

    try {
      const putData = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newImage),
      };
      const response = await fetch(base_url, putData);
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  });
}
