previous code to show items in cart
function showCartItems() {
let cartHtml = "";
myCart.forEach((drink, index) => {
cartHtml += `

    <div class="added-product">
    <div>
      <img
        src="${drink.name.image}"
        alt=""
      />
    </div>
    <div id="name">${drink.name.name}</div>
    <div id="price">${drink.name.Price}₹</div>
    <div id="discount">${drink.name.discount}%</div>
    <div id="flavor">${drink.name.flavor}</div>
    <div id="quantity">
     Quantity
     <button class="increment">+</button>
      <p id="quantity-num"> ${drink.quantity}</p>
      <button class="decrement">-</button>
    </div>
    <button>Purchase</button>
    <button data-id=${index} class="cancel">Cancel</button>

  </div>
    
    
    `;
  });
  cartContainer.innerHTML = cartHtml;
}

<!-- totalFunction  -->

let totalFunction = () => {
let newHtml = "";
let totalPrice = "";
cart.forEach((item, index) => {
const price =
item.name.Price - (item.name.Price _ item.name.discount) / 100;
totalPrice += price _ item.quantity;
newHtml += `
<div class="total">Total<span>${totalPrice}₹</span></div>
            <div class="discount">Total discount <span>${
item.name.discount \* item.quantity
}₹</span></div>
<button>Make Payment</button>

    `;

});
