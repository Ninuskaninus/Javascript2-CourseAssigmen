export function apiPostLogin() {
  const base_url = "https://api.noroff.dev/api/v1/social/auth/login";

  const form = document.getElementById("loginForm");
  const emailElement = document.getElementById("loginEmail");
  const passwordElement = document.getElementById("loginPassword");
  const loginBtn = document.getElementById("login-btn");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const emailValue = emailElement.value;
    const passwordValue = passwordElement.value;
    
    const userLogin = {
      email: emailValue,
      password: passwordValue,
    };

    async function loginUser(base_url, data) {
      try {
        const postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLogin),
        };
        const response = await fetch(base_url, postData);
        const json = await response.json();

        if (response.ok) {
          window.location.href = "feed/index.html";
        } else {
          console.log("Login failed. Handle the error.");
        }

        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", json.name);

        return json;
      } catch (error) {
        console.log(error);
      }
    }

    loginUser(base_url, userLogin);
  });
}

apiPostLogin();
