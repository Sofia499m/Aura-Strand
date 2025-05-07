// Save user from register form
function saveUser(name) 
{
    localStorage.setItem('username', name);
    window.location.href = '/html/Home.html';
}
