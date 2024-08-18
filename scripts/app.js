import { getUsers, getPosts, getPostsViaUserId } from "../services/apiService.js";

const usersSection = document.getElementById('users-section');
const postsSection = document.getElementById('posts-section');

async function renderUsers() {
  const users = await getUsers();
  for (let user of users){
    let userCard = `
      <user-card class="user-card" data-id="${user.id}">
        ${user.name}
        <p slot="email">${user.email}</p>
      </user-card>
    `;
    usersSection.insertAdjacentHTML('beforeend', userCard);
  };

  document.querySelectorAll(".user-card").forEach( userCard => {
    const userId = userCard.getAttribute('data-id');
    userCard.addEventListener('click', () => {
      renderUserPosts(userId);
    });
  });
}

async function renderUserPosts(userId) {
  const posts = await getPostsViaUserId(userId);
  postsSection.innerHTML = '';
  for (let post of posts){
    let postCard = `
      <post-card class="post-card">
        ${post.title}
        <p slot="body">${post.body}</p>
      </post-card>
    `;
    postsSection.insertAdjacentHTML('beforeend', postCard);
  };
}

async function renderPosts() {
  const posts = await getPosts();
  for (let post of posts){
    let postCard = `
      <post-card class="post-card">
        ${post.title}
        <p slot="body">${post.body}</p>
      </post-card>
    `;
    postsSection.insertAdjacentHTML('beforeend', postCard);
  };
}
 
renderUsers();
renderPosts();