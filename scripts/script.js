gsap.from("#navlinks a", {
  y: "-20px",
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("#logo", {
  y: "20px",
  duration: 1,
  opacity: 0,
  scrub: 3,
});
gsap.from(".hero h1", {
  duration: 1,
  delay: 1,
  y: "-80px",
  opacity: 0,
  ease: "power1",
});
gsap.from(".hero h2", {
  duration: 1,
  delay: 1,
  x: "90px",
  opacity: 0,
  ease: "power1",

  // stagger: 0.3,
});
gsap.from("#subheading", {
  duration: 2,
  delay: 1,
  x: "-20px",
  // width: 0,
  opacity: 0,
  scrub: 2,
  // ease: "power1",
});
gsap.from(".hero button", {
  yoyo: true,
  duration: 1.5,
  repeat: -1,
  x: "-200px",
  ease: "power1.inout",
});
gsap.from(".about button", {
  yoyo: true,
  duration: 1.5,
  repeat: -1,
  x: "200px",
  ease: "power1.inout",
});
function showError() {
  let userMessage = document.querySelector("#message-us");
  let blankMessage = document.getElementById("blank-message");
  if (userMessage.value == "") {
    blankMessage.style.display = "block";
  } else {
    blankMessage.style.display = "none";
  }
}

let navigateToPage = () => {
  window.location.href = "productpage.html";
};

// sidebar

function showSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "10em";
  sidebar.style.padding = "2vw 1vw";
  // console.log("hello");
}
function hideSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0em";
  sidebar.style.padding = "0px";
}

let Creams = [
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
];

let my_container = document.querySelector(".product_container");

let RenderItems = () => {
  let newHtml = "";
  Creams.forEach((item) => {
    console.log(item.name);
    newHtml += `
    <div id="product">
    <img
      src=${item.image}
      alt=""
    />
    <div id="explanation">
      <div>
        <h3>${item.name}</h3>
        <span>${item.flavor}</span>
        <button  onclick="navigateToPage()">Try Now</button>
      </div>
    </div>
  </div>
    
    `;
    my_container.innerHTML = newHtml;
  });
};
RenderItems();
