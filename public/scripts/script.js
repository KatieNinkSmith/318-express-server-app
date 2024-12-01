const scroll = document.querySelector(".scrollText");
// console.log(scroll);
const userData = require("../../data/users.js");
console.log(userData.user);

// Function to generate HTML for each user
userData.forEach((user) => {
  const userElement = document.createElement("p");
  userElement.textContent = `${user.name}`;
  scroll.appendChild(userElement);
});
