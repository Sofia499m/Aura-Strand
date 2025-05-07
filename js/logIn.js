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

    // Simulated login check
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      // Redirect or further action can be added here
      // window.location.href = "/html/Home.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});

  

