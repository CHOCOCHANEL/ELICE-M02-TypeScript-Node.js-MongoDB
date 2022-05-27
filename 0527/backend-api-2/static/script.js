const title = document.getElementById('productTitle');
const description = document.getElementById('productDescription');
const price = document.getElementById('productPrice');
const image = document.getElementById('productImage');

const getDataAndPush = async() => {
    const res = await fetch('/product/1');
    const data = await res.json();

    title.innerHTML = data.title;
    description.innerHTML = data.description;
    price.innerHTML = data.price;
    image.innerHTML = data.image;
}