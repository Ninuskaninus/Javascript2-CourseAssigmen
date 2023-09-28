const API_urls = {
  base_url: "https://api.noroff.dev",
  register_url: "/api/v1/social/auth/register",
  login_url: "/api/v1/social/auth/login",
  posts_url: "/api/v1/social/posts",
};

// GET TOKEN

async function fetchWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);

    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchWithToken(API_urls.base_url + API_urls.posts_url);

/* const head = document.querySelector("head");
const tokenToHead = document.createElement("meta");
tokenToHead.setAttribute("name", "token");
tokenToHead.setAttribute("content", "accessToken");
head.appendChild(tokenToHead);
 */
