/**
 * Retrieves the username from the URL query parameters.
 * @returns {string|null} The username, or null if it is not present in the URL.
 */
export function getUsername() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  return username;
}
