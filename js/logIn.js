// logIn.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    //Get references to form elements
    const form = document.querySelector("form");                         // The login form element
    const usernameInput = document.querySelector("input[type='text']"); // Username input field
    const passwordInput = document.querySelector("input[type='password']"); // Password input field
    const rememberMeCheckbox = document.querySelector("input[type='checkbox']"); // "Remember Me" checkbox
    const loginButton = document.querySelector(".btn"); 
