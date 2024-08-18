export async function getUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function getPosts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function getPostsViaUserId(userId) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}
