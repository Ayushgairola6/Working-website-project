let Products = [
  {
    name: "SunKissed glow",
    flavor: "For Beach",
    Price: "50",
    discount: "10",
    size: "100ml",
    id: "1",
    image:
      "images/3d-rendering-personal-care-products-fondant-pink_23-2151053856.jpg",
  },
  {
    name: "Natural radiance",
    flavor: "No Makeup ",
    Price: "50",
    discount: "10",
    id: "2",
    image: "images/set-cosmetics_23-2147808708.jpg",
  },
  {
    name: "Bold Elegance",
    flavor: "To Standout ",
    Price: "50",
    discount: "10",
    id: "3",
    image: "images/beauty-products-recipients-assortment-grey-stones.jpg",
  },
  {
    name: "Worthy Charm",
    flavor: "Impress UR Crush",
    Price: "50",
    discount: "10",
    id: "4",
    image: "images/black-white-beauty-product_23-2151307286.webp",
  },
  {
    name: "Subtle beauty",
    flavor: "what suits you",
    Price: "50",
    discount: "10",
    id: "5",
    image: "images/bottle-lotion-mockup-design_23-2151545290.jpg",
  },
  {
    name: "Timeless Grace",
    flavor: "Be the attention ",
    Price: "50",
    discount: "10",
    id: "6",
    image: "images/composition-cosmetics-with-copy-space-yellow-background.jpg",
  },
  {
    name: "Twilight Splendor",
    flavor: "Daily usage",
    Price: "50",
    discount: "10",
    id: "7",
    image: "images/cosmetic-mockup_15879-620.webp",
  },

  {
    name: "Subtle Impact",
    flavor: "For Professionals",
    Price: "50",
    discount: "10",
    id: "8",
    image: "images/cosmetic-products-bubbles_23-2148945922.webp",
  },
  {
    name: "Sunlit Serenity",
    flavor: "Enjoy the summer",
    Price: "50",
    discount: "10",
    id: "9",
    image:
      "images/front-view-skin-oil-droppers-face-cream-recipients-composition_23-2148761454.jpg",
  },
  {
    name: "Luminous Love",
    flavor: "make memories",
    Price: "50",
    discount: "10",
    id: "10",
    image: "images/set-cosmetics_23-2147808708.jpg",
  },

  {
    name: "Luminous Love",
    flavor: "make memories",
    Price: "50",
    discount: "10",
    id: "10",
    image: "images/set-cosmetics_23-2147808708.jpg",
  },
  {
    name: "Twilight Splendor",
    flavor: "Daily usage",
    Price: "50",
    discount: "10",
    id: "7",
    image: "images/cosmetic-mockup_15879-620.webp",
  },
  {
    name: "Timeless Grace",
    flavor: "Be the attention ",
    Price: "50",
    discount: "10",
    id: "6",
    image: "images/composition-cosmetics-with-copy-space-yellow-background.jpg",
  },
  {
    name: "Firstglance beauty",
    flavor: "what suits you",
    Price: "50",
    discount: "10",
    id: "5",
    image: "images/bottle-lotion-mockup-design_23-2151545290.jpg",
  },
];
// console.log(Products);
let cartnumber = [];
let myCart = [];
let cartCount = "";
let cartIcon = document.getElementById("cart-span");
let products_Container = document.querySelector(".prodcuts-container");

let productCard = document.querySelector(".product-card");

// showing items inside the carta

//  Function TO DISPLAY ITEMS

function displayingProducts() {
  let newHtml = "";
  Products.forEach((product, index) => {
    newHtml += `
    <div class="product-card">
    <div>
      <img
        src="${product.image}"
        alt=""
      />
    </div>
  <h5>${product.name}</h5>
    <div id="name"> <p>${product.flavor}</p></div>
    <div id="price"> <span>Price</span> <p>${product.Price}₹</p></div>
    <div id="discount"> <span> Discount</span> <p>${product.discount}%</p></div>
    <div>
      <button  data-id="${index}"  class="add">Add to Bag</button>
      
    </div>
  </div>

    `;
  });
  products_Container.innerHTML = newHtml;
}

displayingProducts();

function addToCart() {
  products_Container.addEventListener("click", function (event) {
    cartCount++;
    cartIcon.textContent = cartCount;
    cartnumber.push(cartIcon.textContent);
    if (event.target.classList.contains("add")) {
      let productId = event.target.dataset.id;
      // cartCount++;
      // cartIcon.textContent = cartCount;
      let existingItem = myCart.find(
        (item) => item.name.id === Products[productId].id
      );

      if (existingItem) {
        // If item already exists in cart, increment quantity
        existingItem.quantity++;
      } else {
        // If item doesn't exist in cart, add it with quantity 1
        myCart.push({
          name: Products[productId],
          quantity: 1,
        });
      }
      localStorage.setItem("mycart", JSON.stringify(myCart));
      localStorage.setItem("cartquantity", JSON.stringify(cartnumber));
      console.log(myCart);
    }
  });
}

addToCart();

// TO DISPLAY ITEMS ON SEARCH

const searchInput = document.querySelector("#input");
const resultContainer = document.querySelector(".results");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultContainer.innerHTML = "";

  if (query) {
    const filteredProducts = Products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
      resultContainer.style.display = "block";
      filteredProducts.forEach((product) => {
        const resultItem = document.createElement("div");

        resultItem.classList.add("result-item");
        resultItem.textContent = product.name;
        resultContainer.appendChild(resultItem);
      });
    } else {
      resultContainer.style.display = "none";
    }
  } else {
    resultContainer.style.display = "none";
  }
  // console.log(filteredProducts);
});
let overlay = document.querySelector(".overlay");
searchInput.addEventListener("focus", () => {
  overlay.style.display = "block";
});

searchInput.addEventListener("blur", () => {
  overlay.style.display = "none";
});
// sidebar
let sidebar = document.querySelector(".sidebar");

function showSidebar() {
  // sidebar.style.width = "10em";
  sidebar.style.display = "block";
}

function hideSidebar() {
  sidebar.style.display = "none";
}
