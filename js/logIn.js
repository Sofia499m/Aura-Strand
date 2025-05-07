document.addEventListener("DOMContentLoaded", function () {
  // Get the login form element by its ID
  const form = document.getElementById("loginForm");
  //input elements for username and password from the form
  const usernameInput = form.elements["username"];
  const passwordInput = form.elements["password"];

  // Add a 'submit' event listener to the form
  form.addEventListener("submit", function (event) {
    //prevent page from reloading
    event.preventDefault();

    // Get the trimmed values from the input fields
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if either the username or password field is empty
    //if empty output alert
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    //access stored user info 
    const storedUser = JSON.parse(localStorage.getItem('user'));

    //if user details are correct ouput following message
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
    
    //redirect to home page
    window.location.href = "/html/Home.html";

    //if info does not match ouput message
    } else {
      alert("Invalid username or password.");
    }
  });
});


  

