let cart = JSON.parse(localStorage.getItem("mycart"));
// console.log(cart[0].quantity);
// console.log(cart[0].name.Price);

const mycart = document.querySelector("#cart-card ");

let today = new Date();
let shortDate = today.toLocaleDateString();
const month = today.getMonth();
const week = today.getUTCDate();
// A FUNCTION TO DISPLAY ITEMS THAT ARE ADDED INTO THE CART
function cartDisplay() {
  let newHtml = "";
  cart.forEach((elem, index) => {
    newHtml += `

<div id="item-card">
  <img src="${elem.name.image}" alt="" />
  <div id="name">${elem.name.name}</div>
  <div id="date">Estimated date of delievery <span>
    ${shortDate}  
  </span></div>
  <div id="price">${elem.name.Price}₹</div>
  <div id="discount">${elem.name.discount}%</div>
  <div class="quantity-container">
  <button data-index="${index}" class="increment">+</button>
  <span id="quantity">${elem.quantity}</span>
  <button data-index="${index}" class="decrement">-</button>
</div>
<div class="total">${
      elem.name.Price * elem.quantity -
      (elem.name.Price * elem.name.discount * elem.quantity) / 100
    }₹</div>
<button data-index=${index} class="delete material-symbols-outlined">delete </button>

</div>


`;
  });
  mycart.innerHTML = newHtml;
}
cartDisplay();

// A METHOD TO UPDATE CART QUANTITY

mycart.addEventListener("click", function (event) {
  if (event.target.classList.contains("increment")) {
    let index = event.target.dataset.index;
    cart[index].quantity++; // Increment quantity
    localStorage.setItem("mycart", JSON.stringify(cart));
    cartDisplay(); // Update cart display
    updateTotal();
  }

  if (event.target.classList.contains("decrement")) {
    let index = event.target.dataset.index;
    if (cart[index].quantity > 1) {
      cart[index].quantity--; // Decrement quantity only if greater than zero
      localStorage.setItem("mycart", JSON.stringify(cart));
      cartDisplay(); // Update cart display
      updateTotal();
    }
  }
});

mycart.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("delete")) {
    let index = event.target.dataset.index;
    cart.splice(index, 1);
    localStorage.removeItem(index);
    localStorage.setItem("mycart", JSON.stringify(cart));
    cartDisplay();
    updateTotal();
  }
});

const finalCart = [];

let priceContainer = document.querySelector("#price-container");
const totalPrice = cart.reduce(
  (acc, current) => acc + current.name.Price * current.quantity,
  0
);
const totalDiscount = cart.reduce(
  (acc, current) =>
    acc +
    ((current.name.Price * current.name.discount) / 100) * current.quantity,
  0
);

const tobePayed = cart.reduce(
  (acc, current) =>
    acc +
    current.name.Price * current.quantity -
    (current.name.Price * current.name.discount * current.quantity) / 100,
  0
);
// let total = (document.querySelector(".total").textContent = totalPrice);
// let Payed = (document.querySelector(".tobe-payed").textContent = tobePayed);
// let discount = (document.querySelector(".discount").textContent =
//   totalDiscount);
// let saved = (document.querySelector(".saved").textContent =
//   totalPrice - (totalPrice - totalDiscount));

// console.log(totalDiscount);
function updateTotal(index) {
  let quantity = cart.quantity;
  priceContainer.innerHTML = `
  <div class="total">Total <span>${totalPrice}₹</span></div>
<div class="total">To be Payed<span>${tobePayed}₹</span></div>
<div class="discount">Total discount <span>${totalDiscount}%</span></div>
<div class="saved , discount">Saved <span>${
    totalPrice - (totalPrice - totalDiscount)
  }₹</span></div>
  <button class="pay">Make Payment</button>

`;
}
updateTotal();
