export function triggerModal() {
  const commentModalContainer = document.getElementById("comment-modal");
  commentModalContainer.addEventListener("click", () => {
    commentModalContainer.style.display = "none";
  });

  if (
    commentModalContainer.style.display === "none" ||
    !commentModalContainer.style.display
  ) {
    commentModalContainer.style.display = "flex";
  } else {
    console.error(`Post with ID ${thisPostId} not found.`);
  }
}
