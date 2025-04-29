let iconCart = document.querySelector('.fa-shopping-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
iconCart.addEventListener('click',() => {
    body.classList.toggle('showCart')
});
closeCart.addEventListener('click',() => {
    body.classList.toggle('showCart')
});