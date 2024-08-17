import { getUsers, getPosts } from "../services/apiService.js";

const usersSection = document.getElementById('users-section');
const postsSection = document.getElementById('posts-section');

async function renderUsers() {
  const users = await getUsers();
  for (let user of users){
    let userCard = `
      <user-card class="user-card">
        ${user.name}
        <p slot="email">${user.email}</p>
      </user-card>
    `;
    usersSection.insertAdjacentHTML('beforeend', userCard);
  };
}
 
renderUsers();