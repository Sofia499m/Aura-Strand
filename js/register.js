// Save user from registration form
function saveUser(name) {
    localStorage.setItem('username', name);
    window.location.href = '/html/Home.html';
  }
  
  // Handle form submission from register.html
  function handleRegister(event) {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="Username"]').value;
    saveUser(name);
  }
  
  // Show user in navbar if logged in
  function showUserInNavbar() {
    const username = localStorage.getItem('username');
    if (username) {
      const iconArea = document.querySelector('.icon__items');
      const nameTag = document.createElement('li');
      nameTag.textContent = `Welcome, ${username}`;
      iconArea.insertBefore(nameTag, iconArea.firstChild);
    }
  }
  
  // Optional: logout functionality
  function logoutUser() {
    localStorage.removeItem('username');
    window.location.reload();
  }
  
