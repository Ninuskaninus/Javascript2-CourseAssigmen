export function apiPostLogin() {

const base_url = "https://api.noroff.dev/api/v1/social/auth/login";


  const form = document.getElementById("loginForm");
  const emailElement = document.getElementById("loginEmail");
  const passwordElement = document.getElementById("loginPassword");
  const loinBtn = document.getElementById("login-btn");
  
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); 
  
    const emailValue = emailElement.value;
    const passwordValue = passwordElement.value;

    console.log("Email Value:", emailValue);
    console.log("Password Value:", passwordValue);

    const userLogin = {
      email: emailValue,
      password: passwordValue,
    }


  async function loginUser(base_url, data) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userLogin),
      };
      const response = await fetch(base_url, postData);
      console.log(response);
      const json = await response.json();
      const accessToken = json.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", data.name);
      console.log(json);
  
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  loginUser(base_url, userLogin);
});
}

apiPostLogin();





