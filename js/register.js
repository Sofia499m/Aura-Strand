// Save user from registration form
function saveUser(username, password) {
  // Create a user object with the provided username and password
  const userData = { username, password };
  // Store the user object in localStorage as a JSON string
  localStorage.setItem('user', JSON.stringify(userData));
  //redirect to home page
  window.location.href = '/html/Home.html';
}

// Handle form submission from register.html
function handleRegister(event) {
  //prevent reload
  event.preventDefault();
  //get values from input
  const username = document.querySelector('input[placeholder="Username"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;

  //output message if empty
  if (!username || !password) {
    alert("Please fill in both username and password.");
    return;
  }

  //save user information
  saveUser(username, password);
}

// show user in navbar
function showUserInNavbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.username) {
    const iconArea = document.querySelector('.icon__items');
    const nameTag = document.createElement('li');
    nameTag.textContent = `Welcome, ${user.username}`;
    //insert user at the top
    iconArea.insertBefore(nameTag, iconArea.firstChild);
  }
}

  
