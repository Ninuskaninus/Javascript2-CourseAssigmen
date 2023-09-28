const apiURL = "https://api.noroff.dev/api/v1/social/posts";
const JWT = localStorage.getItem("accessToken");

fetch(apiURL, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if the API response is an array of posts
      if (Array.isArray(data)) {
        const postObjects = data.map((post) => {
          return {
            title: post.title,
            created: post.created,
            id: post.id,
            pictureUpload: post.media,
            tags: post.tags,
            body: post.body,
            updated: post.updated,
            likes: post._count?.reactions || 0,
            comments: post._count?.comments || 0,
          };
        });
  
        console.log(postObjects);
      } else {
        console.error("API response is not an array of posts.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    export { postObjects }
  
  
