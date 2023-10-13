export async function editPost(event) {
    const thisPostId = event.target.closest(".feedCard").id;
    const edit_url = `https://api.noroff.dev/api/v1/social/posts/${thisPostId}`;
    const JWT = localStorage.getItem("accessToken");

    const form = document.getElementById("edit-body-form");
    const bodyElement = document.getElementById("edit-body-input");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const bodyValue = bodyElement.value;

        const newBody = {
            body: bodyValue,
        };

        try {
            const updatePost = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWT}`,
                },
                body: JSON.stringify(newBody),
            };
            const response = await fetch(edit_url, updatePost);
            console.log(response);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    });
}

export async function deleteImg(event){
    const thisPostId = event.target.closest(".feedCard").id;
    const edit_url = `https://api.noroff.dev/api/v1/social/posts/${thisPostId}`;
    const JWT = localStorage.getItem("accessToken");

        const noImg = {
            title: "",
            media: " ",
        };

        try {
            const deleteImg = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JWT}`,
                },
            };
            const response = await fetch(edit_url, noImg);
            const json = await response.json();

        } catch (error) {
            console.log(error);
        }

}
