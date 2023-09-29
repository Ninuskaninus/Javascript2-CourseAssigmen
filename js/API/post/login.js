const API_urls = {
  base_url: "https://api.noroff.dev",
  register_url: "/api/v1/social/auth/register",
  login_url: "/api/v1/social/auth/login",
  posts_url: "/api/v1/social/posts",
};

const userLogin = {
  name: "nina",
  email: "ninamd@stud.noroff.no",
  password: "ninaamdal12345",
};

async function loginUser(url, data) {
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
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(json);

    return json;
  } catch (error) {
    console.log(error);
  }
}

loginUser(API_urls.base_url + API_urls.login_url, user);
