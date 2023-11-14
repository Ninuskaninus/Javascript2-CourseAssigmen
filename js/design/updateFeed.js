import { createFeedCard } from "/js/design/create-feed.card.js";
import { feedContainer } from "./feed.js";

export function updateFeed(sortedPosts) {
  // Clear the feedContainer before appending sorted posts
  feedContainer.innerHTML = "";

  sortedPosts.forEach((post) => {
    const feedCard = createFeedCard(post);
    feedContainer.appendChild(feedCard);
  });
}
