const apiURL = "https://api.noroff.dev/api/v1/social/profiles_posts=true";
const JWT = localStorage.getItem("accessToken");

export function fetchAllProfiles() {
  return fetch(apiURL, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const profiles = data.map((profile) => {
          return {
            name: profile.name,
            avatar: profile.avatar,
            banner: profile.banner,
            email: profile.email,
            followers: profile._count?.followers || 0,
            following: profile._count?.following || 0,
            posts: profile._count?.posts || 0,
          };
        });
        console.log(profiles);
        return profiles;
      } else {
        console.error("API response is not an array of profiles.");
        return [];
      }
    });
}
