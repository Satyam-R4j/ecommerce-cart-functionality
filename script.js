document.addEventListener('DOMContentLoaded', () =>
{
    const products = [
        {
            id: 1, name: "Product 1", price: 19.00
        },
        {
            id: 2, name: "Product 2", price: 59.00
        },
        {
            id: 3, name: "Product 3", price: 99.00
        },
    ]

    const cart = []

    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMessage = document.getElementById('empty-cart')
    const cartTotalMessage = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkOutBtn = document.getElementById('checkout-btn')

    products.forEach(products =>
    {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span>${products.name} - $${products.price.toFixed(2)}</span>
        <button data-id="${products.id}">Add to cart</button>
        `
        productList.appendChild(productDiv)
    });


    productList.addEventListener('click',(e)=>{

        if(e.target.tagName === 'BUTTON')
        {
            console.log("clicked");
            console.log(e.target.getAttribute('data-id'))

            
        }
        
    })

})