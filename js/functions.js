
const header = document.querySelector("header");
const iconCart = header.lastElementChild;
const cart = document.querySelector(".cart");
const articles = document.querySelectorAll('.products__article');
const cartBody = document.querySelector('.cart__body');
const trashs = document.querySelectorAll('.cart__i');
const badge = document.querySelector('.badge');
const buttonClose = document.querySelector('.close-icon');
const iconMenu = header.firstElementChild;
const menu = document.querySelector('.menu');

const createElementCart = (article) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');

    const cartImg = document.createElement('img');
    cartImg.src = article.querySelector('img').src;
    cartImg.alt = '';
    cartImg.width = 100;
    cartImg.classList.add('cart__img');
    cartItem.appendChild(cartImg);

    const price = document.createElement('p');
    price.classList.add('cart__p');
    price.textContent = article.querySelector('p').textContent;
    cartItem.appendChild(price);

    const name = document.createElement('p');
    name.classList.add('cart__P');
    name.textContent = article.querySelector('h3').textContent;;
    cartItem.appendChild(name);

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash-alt', 'cart__i');
    cartItem.appendChild(trashIcon);

    cartBody.appendChild(cartItem);
    itemsInCart()
}

const itemsInCart = () => {
    const items = document.querySelectorAll('.cart__item');
    badge.textContent = items.length;
}

iconCart.addEventListener('click', () => {
    cart.classList.toggle('show');
})

articles.forEach(article => {
    const buttonItem = article.querySelector('button');
    buttonItem.addEventListener('click', () => {
        createElementCart(article);
    });
});

cartBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash-alt')) {
        const cartItemDelete = event.target.closest('.cart__item');
    
        cartItemDelete.remove();
        itemsInCart();
    }
});

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('show');
});

iconMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});