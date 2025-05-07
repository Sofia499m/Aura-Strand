document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const usernameInput = form.elements["username"];
  const passwordInput = form.elements["password"];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      // Optionally redirect
      // window.location.href = "/html/Home.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});


  

