const apiURL = "https://api.noroff.dev/api/v1/social/posts";
const JWT = localStorage.getItem("accessToken");

export function fetchUsersData() {
  return fetch(apiURL, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if the API response is an array of posts
      if (Array.isArray(data)) {
        const users = data.map((post) => {
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
          const formattedCreatedDate = `${createdDate.getDate()}.${months[createdDate.getMonth()]} ${createdDate.getFullYear()}`;
          const formattedUpdatedDate = `${updatedDate.getDate()}.${months[updatedDate.getMonth()]} ${updatedDate.getFullYear()}`;

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

        console.log("API response:", users);

        return users;
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
