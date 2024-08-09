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
