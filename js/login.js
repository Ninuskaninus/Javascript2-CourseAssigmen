const API_urls = {
    base_url: "https://api.noroff.dev",
    register_url: "/api/v1/social/auth/register",
    login_url: "/api/v1/social/auth/login",
    posts_url: "/api/v1/social/posts"
}

//REGISTER

async function registerUser(url, data) {
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
  
  const user = { 
    name: "nina",
    email: "ninamd@stud.noroff.no",
    password: "ninaamdal12345"
};
  
  registerUser(API_urls.base_url + API_urls.register_url, user);

// LOGIN

const userLogin = {
    name: 'nina',
    email: 'ninamd@stud.noroff.no',
    password: 'ninaamdal12345',
  };
  
  async function loginUser(url, data) {
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      const accessToken = json.accessToken;
      localStorage.setItem('accessToken', accessToken);
      console.log(json);

      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  loginUser(API_urls.base_url + API_urls.login_url, user);

// GET TOKEN 

async function fetchWithToken(url) {
    try {
      const token = localStorage.getItem('accessToken');
      const getData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);
     
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchWithToken(API_urls.base_url + API_urls.posts_url);