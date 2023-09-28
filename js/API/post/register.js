const API_urls = {
  base_url: "https://api.noroff.dev",
  register_url: "/api/v1/social/auth/register",
  login_url: "/api/v1/social/auth/login",
  posts_url: "/api/v1/social/posts",
};

//REGISTER

async function registerUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

let userForm = document.querySelector("#registerForm");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(userForm);
  const name = String(formData.get("name")) || "";
  const email = String(formData.get("email")) || "";
  const password = String(formData.get("password")) || "";
  const user = {
    name: name,
    email: email,
    password: password,
  };

  registerUser(API_urls.base_url + API_urls.register_url, user);
});
