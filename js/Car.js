let iconCart = document.querySelector('.fa-shopping-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.Products_countainer');
let listCartHTML = document.querySelector('.listProducts');
let iconCartSpan = document.querySelector('.icon__items');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click',() => {
    body.classList.toggle('showCart')
});
closeCart.addEventListener('click',() => {
    body.classList.remove('showCart')
});

const addDataToHTML = () =>{
    listProductHTML.innerHTML='';
    if(listProducts.length > 0){
        listProducts.forEach( product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" class="img1">
                <h4>${product.name}</h4>
                <p>${product.price}<p>
                <button><h2>Add To Car</h2></button
                `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        let product_id = positionClick.parentElement.dataet.id; 
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
}
const addCartToHTML = () =>{
    listCartHTML.innerHTML='';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            let info = listProducts[PositionProduct];
            newCart.classList.add('item'); 
            newCart.innerHTML = ` 
                <div class="image"><img src="${info.image}"></div>
                <div class="name">${info.name}</div>
                <div class="Total Price">€${info.price}</div>
                <div class="quantity">
                    <span class="minus">&lt;</span>
                    <span class="num">${cart.quantity}</span>
                    <span class="plus">></span>
                </div>`;
            listCartHTML.appendChild(newCart);
        })
    }
}

const initApp = () => {
    //Data Json
    fetch('products.json')
    then(response => response.json())
    then(data => {
        listProducts = data;
        addDataToHTML();
    })
}
initApp();