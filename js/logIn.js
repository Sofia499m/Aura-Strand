document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = form.querySelector('input[placeholder="Username"]');
    const passwordInput = form.querySelector('input[placeholder="Password"]');
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent default form submission
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Basic validation
      if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
      }
  
      // Example check: simulate correct login
      // Replace this with real authentication logic (e.g., server-side check)
      if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // You can redirect here if needed
        // window.location.href = "/html/Home.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });
  

