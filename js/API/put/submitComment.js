export function submitComment() {
  const comment_url = `https://api.noroff.dev/api/v1/social/posts/3831/comment`;
  const JWT = localStorage.getItem("accessToken");
  const form = document.getElementById("leave-comment-form");
  const body = document.getElementById("leave-comment-input");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const bodyValue = body.value;

    const newComment = {
      body: bodyValue,
    };

    console.log(newComment);

    try {
      const postComment = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JWT}`,
        },
        body: JSON.stringify(newComment),
      };
      const response = await fetch(comment_url, postComment);
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  });
}
