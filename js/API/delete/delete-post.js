export async function deletePost(event) {
    try {
        const thisPostId = event.target.closest(".feedCard").id;
        const delete_url = `https://api.noroff.dev/api/v1/social/posts/${thisPostId}`;
        const JWT = localStorage.getItem("accessToken");

        const deleteData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JWT}`,
            },
        };

        const response = await fetch(delete_url, deleteData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        window.location.reload();
    } catch (error) {
        console.error("Error deleting post:", error);
    }
}
