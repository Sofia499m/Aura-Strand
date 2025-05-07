// Save user from registration form
function saveUser(username, password) {
  const userData = { username, password };
  localStorage.setItem('user', JSON.stringify(userData));
  window.location.href = '/html/Home.html';
}

// Handle form submission from register.html
function handleRegister(event) {
  event.preventDefault();
  const username = document.querySelector('input[placeholder="Username"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;

  if (!username || !password) {
    alert("Please fill in both username and password.");
    return;
  }

  saveUser(username, password);
}

// Optional: show user in navbar
function showUserInNavbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.username) {
    const iconArea = document.querySelector('.icon__items');
    const nameTag = document.createElement('li');
    nameTag.textContent = `Welcome, ${user.username}`;
    iconArea.insertBefore(nameTag, iconArea.firstChild);
  }
}

// Optional: logout functionality
function logoutUser() {
  localStorage.removeItem('user');
  window.location.reload();
}

  
