import { fetchMyProfile } from "/js/API/get/myProfile.js";
const myProfile = await fetchMyProfile();
const username = myProfile.name;

export function editBanner() {
  const base_url =
    "https://api.noroff.dev/api/v1/social/profiles/" + username + "/media";
  const accessToken = localStorage.getItem("accessToken");
  const formBanner = document.getElementById("banner-form");
  const inputBanner = document.getElementById("banner-input");

  formBanner.addEventListener("submit", async function (event) {
    event.preventDefault();

    const bannerValue = inputBanner.value;
    console.log("Banner Value:", bannerValue);

    const newBanner = {
      banner: bannerValue,
    };

    try {
      const putData = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newBanner),
      };
      const response = await fetch(base_url, putData);

      const json = await response.json();

    } catch (error) {
      console.log(error);
    }
    window.location.reload();
    form.style.display = "none";
  });
}
