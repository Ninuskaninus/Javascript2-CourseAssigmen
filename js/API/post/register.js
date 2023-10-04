const API_urls = {
  base_url: "https://api.noroff.dev",
  register_url: "/api/v1/social/auth/register",
};

const form = document.getElementById("registerForm");
const nameElement = document.getElementById("registerUsername");
const emailElement = document.getElementById("registerEmail");
const passwordElement = document.getElementById("registerPassword");
const submitBtn = document.getElementById("create-user-btn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nameValue = nameElement.value;
  const emailValue = emailElement.value;
  const passwordValue = passwordElement.value;

  const newUser = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
    const response = await fetch(
      API_urls.base_url + API_urls.register_url,
      postData
    );
    console.log(response);
    const json = await response.json();

    if (response.ok) {
      window.location.href = "../index.html";
    } else {
      console.log("Login failed. Handle the error.");
    }

    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userName", json.name);

    console.log(json);
  } catch (error) {
    console.log(error);
  }
});
