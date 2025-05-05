let iconCart = document.querySelector('.fa-shopping-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.Products_countainer');
let listCartHTML = document.querySelector('.listProducts');
let iconCartSpan = document.querySelector('.icon-cart-span');



let listProducts = [
    {
        "id": 1,
        "name": "LD01 L'Oréal Paris Elvive Dream Lengths 3-in-1 Curls Hydration Mask",
        "price": 7.45,
        "image": "/css/images/curlsHairMask.png",
        "category": "Hair Mask"
    },
    {
        "id": 2,
        "name": "LD02 Function of Beauty PRO",
        "price": 28,
        "image": "/css/images/wavy hair mask.webp",
        "category": "Hair Mask"
    },
    {
        "id": 3,
        "name": "LD03 Gisou Honey Gloss Ceramide Therapy Hair Mask",
        "price": 21.47,
        "image": "/css/images/StraightHairMask.webp",
        "category": "Hair Mask"
    },
    {
        "id": 4,
        "name": "LD04 Kérastase Nutritive Masquintense Riche Deep Nutrition Rich Mask",
        "price": 39.95,
        "image": "/css/images/nutritiveHairMask.png",
        "category": "Hair Mask"
    },
    {
        "id": 5,
        "name": "LD05 Cantu Biotin-Biotin Infuse hair & scalp",
        "price": 11.99,
        "image": "/css/images/oilGrowth.jpeg",
        "category": "Hair Oils"
    },
    {
        "id": 6,
        "name": "LD06 L'Oréal Paris Hair Oil By Elvive Extraordinary oil for Dry hair",
        "price": 10.69,
        "image": "/css/images/oilDry.webp",
        "category": "Hair Oils"
    },
    {
        "id": 7,
        "name": "LD07 Kerastase Oleo-Relax Morpho Huile",
        "price": 57,
        "image": "/css/images/oilFrizzy.jpeg",
        "category": "Hair Oils"
    },
    {
        "id": 8,
        "name": "LD08 Olaplex No.7 Bonding Oil",
        "price": 24.57,
        "image": "/css/images/oilEnds.png",
        "category": "Hair Oils"
    },
    {
        "id": 9,
        "name": "LD09 Alfaparf Milano Semi Di Lino Curls Enhancing Low Shampoo 250ml",
        "price": 12.78,
        "image": "/css/images/CurlsShampoo.png",
        "category": "Shampoo"
    },
    {
        "id": 10,
        "name": "LD010 L'Oréal Paris Elvive Glycolic Gloss shampoo",
        "price": 28.77,
        "image": "/css/images/StraightShampoo.jpeg",
        "category": "Shampoo"
    },
    {
        "id": 11,
        "name": "LD011 Active Shampoo A2 For Oily hair",
        "price": 5.57,
        "image": "/css/images/OilyShampoo.png",
        "category": "Shampoo"
    },
    {
        "id": 12,
        "name": "LD012 Derma Pro Scalp Care Quenching Hydration",
        "price": 6.99,
        "image": "/css/images/DryShampoo.png",
        "category": "Shampoo"
    },
    {
        "id": 13,
        "name": "LD013 Alfaparf Milano Semi Di Lino Curls Enhancing Low conditioner",
        "price": 13.99,
        "image": "/css/images/Conditioner1.webp",
        "category": "Conditioner"
    },
    {
        "id": 14,
        "name": "LD014 L'Oréal Paris Elvive Glycolic Gloss conditioner",
        "price": 28.77,
        "image": "/css/images/Conditioner2.webp",
        "category": "Conditioner"
    },
    {
        "id": 15,
        "name": "LD015 Oat Milk Blend Conditioner",
        "price": 5.97,
        "image": "/css/images/oat_conditioner.png",
        "category": "Conditioner"
    },
    {
        "id": 16,
        "name": "LD016 Garnier Ultimate Blends Coconut Milk Dry Hair Conditioner 360ml",
        "price": 5.99,
        "image": "/css/images/dryConditioner.png",
        "category": "Conditioner"
    }
];

let carts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';

    titleProduct.forEach(titleObje => {
        //creat and append the title 
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerHTML = `<div class="title"><h1>${titleObje.title}</h1></div>`;
        listProductHTML.appendChild(newTitle);

        let filterProdusct=listProducts.filter(product => product.category === titleObje.title);

        let productContainer = document.createElement('div');
        productContainer.classList.add('product-category');
        
        filterProdusct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" class="img1">
                <h4>${product.name}</h4>
                <p>€${product.price.toFixed(2)}</p>
                <button class="addcart"><h2>Add To Cart</h2></button>
            `;
            productContainer.appendChild(newProduct);
        });
        listProductHTML.appendChild(productContainer);
    });
};

listProductHTML.addEventListener('click', (event) => {
    let button = event.target.closest('.addcart');
    if (button) {
        let product_Element = button.parentElement.dataset.id;
        let product_id = parseInt(product_Element);
        addToCart(product_id);
    }
});

const addToCart = (product_id) => {
    let position = carts.findIndex(item => item.product_id === product_id);
    if (position < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[position].quantity += 1;
    }
    addCartToHTML();
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if (carts.length > 0) {
        carts.forEach(cart => {
            let product = listProducts.find(p => p.id === cart.product_id);
            let newCart = document.createElement('div');
            newCart.classList.add('items');
            newCart.innerHTML = `
                <div class="image"><img src="${product.image}"></div>
                <div class="name">${product.name}</div>
                <div class="Total Price">€${(product.price * cart.quantity).toFixed(2)}</div>
                <div class="quantity">
                    <span class="minus" data-id="${product.id}">&lt;</span>
                    <span class="num">${cart.quantity}</span>
                    <span class="plus" data-id="${product.id}">&gt;</span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        });
    }

    // Update cart counter
    let iconCartSpan = document.querySelector('.icon-cart-span');
    iconCartSpan.innerText = carts.reduce((total, item) => total + item.quantity, 0);
};

listCartHTML.addEventListener('click', (event) => {
    if (event.target.classList.contains('plus')) {
        let id = parseInt(event.target.dataset.id);
        changeQuantity(id, 1);
    } else if (event.target.classList.contains('minus')) {
        let id = parseInt(event.target.dataset.id);
        changeQuantity(id, -1);
    }
});

const changeQuantity = (product_id, change) => {
    let position = carts.findIndex(item => item.product_id === product_id);
    if (position >= 0) {
        carts[position].quantity += change;
        if (carts[position].quantity <= 0) {
            carts.splice(position, 1); 
        }
        addCartToHTML(); 
    }
};

addDataToHTML();
