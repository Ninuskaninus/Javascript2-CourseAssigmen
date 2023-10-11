export function apiPostNewPost() {
  const base_url = "https://api.noroff.dev/api/v1/social/posts";
  const accessToken = localStorage.getItem("accessToken");

  const form = document.getElementById("postForm");
  const bodyElement = document.getElementById("upload-head-text");
  const mediaElement = document.getElementById("upload-image");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const bodyValue = bodyElement.value;
    const mediaUrl = mediaElement.value;

    console.log("Body Value:", bodyValue);
    console.log("Media URL:", mediaUrl);

    const newPost = {
      title: "",
      body: bodyValue,
      media: mediaUrl,
    };

    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newPost),
      };
      const response = await fetch(base_url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  });
}
