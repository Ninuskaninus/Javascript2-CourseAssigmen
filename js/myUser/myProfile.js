const base_url = "https://api.noroff.dev/api/v1/social/profiles";
const users_url = "/nina";
const accessToken = localStorage.getItem("accessToken");

// MY PROFILE
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

// MY POSTS
const myPosts_url = `${base_url}${users_url}/posts`;
export function fetchMyPosts() {
  return fetch(myPosts_url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const myPosts = data.map((post) => {
          // Parse the 'created' and 'updated' date strings into Date objects
          const createdDate = new Date(post.created);
          const updatedDate = new Date(post.updated);

          // Define the months as an array for formatting
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          // Format the dates in the desired format
          const formattedCreatedDate = `${createdDate.getDate()}.${
            months[createdDate.getMonth()]
          } ${createdDate.getFullYear()}`;
          const formattedUpdatedDate = `${updatedDate.getDate()}.${
            months[updatedDate.getMonth()]
          } ${updatedDate.getFullYear()}`;

          return {
            title: post.title,
            created: formattedCreatedDate, // Use the formatted date
            id: post.id,
            pictureUpload: post.media,
            tags: post.tags,
            body: post.body,
            updated: formattedUpdatedDate, // Use the formatted date
            likes: post._count?.reactions || 0,
            comments: post._count?.comments || 0,
            profilePicture: post._author?.avatar,
            username: post._author?.name,
          };
        });
        return myPosts;
      } else {
        console.error("API response is not an array of posts.");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

// MY FOLLOWERS
const followers_url = `https://api.noroff.dev/api/v1/social/profiles/nina?_following=true&_followers=true&_posts=true`;
const JWT = localStorage.getItem("accessToken");

export function fetchFollowers() {
  return fetch(followers_url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.followers && Array.isArray(data.followers)) {
        const followers = data.followers.map((follower) => ({
          name: follower.name,
          avatar: follower.avatar,
        }));
        return followers;
      } else {
        console.error(
          "API response does not have the expected structure for followers."
        );
        return [];
      }
    });
}

// MY FOLLOWING

export function fetchFollowing() {
  return fetch(followers_url, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.following && Array.isArray(data.following)) {
        const following = data.following.map((followed) => ({
          name: followed.name,
          avatar: followed.avatar,
        }));
        return following;
      } else {
        console.error(
          "API response does not have the expected structure for following."
        );
        return [];
      }
    });
}
