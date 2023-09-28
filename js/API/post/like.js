import { fetchUsersData } from "/js/users/users.js";
const users = await fetchUsersData();

// Function to update the like count and UI when a like button is clicked
async function handleLikeButtonClick(postId) {
    const post = users.find(post => post.postId === postId);
  
    if (post) {
      // Increment the like count for the specific post
      post.likes++;
      
      // Update the UI to reflect the new like count
      const likeCountElement = document.getElementById(`likebutton${postId}`);

      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/social/posts/${postId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likes: post.likes }), // Send updated likes count
        });
  
        if (!response.ok) {
          // Handle error response from the server
          console.error('Failed to update likes on the server');
        }
      } catch (error) {
        // Handle network or request error
        console.error('Error sending PUT request:', error);
      }
    }
  }
  
  




