const base_url = "https://api.noroff.dev/api/v1/social/profiles";
const users_url = "/nina";
const accessToken = localStorage.getItem("accessToken");

export function fetchMyProfile() {
  const myProfile_url = `${base_url}${users_url}`;

  return fetch(myProfile_url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const myProfile = {
        avatar: data.avatar,
        banner: data.banner,
        name: data.name,
        email: data.email,
        followers: data._count?.followers || 0,
        following: data._count?.following || 0,
        posts: data._count?.posts || 0,
      };
      return myProfile;
    })
    .catch((error) => {
      console.error("Error fetching profile:", error);
      throw error; // Re-throw the error for handling elsewhere if needed
    });
}
