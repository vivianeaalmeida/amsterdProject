const header = document.querySelector(".header");
const images = [
  /* "url('assets/img1.jpg')",*/
  "url('assets/img2.jpg')",
  "url('assets/img3.jpg')",
  "url('assets/img4.jpg')",
];

setInterval(function () {
  const bgImage = images[Math.floor(Math.random() * images.length)];

  header.classList.add("fade");

  setTimeout(() => {
    header.style.background = bgImage;
    header.classList.remove("fade");
  }, 1000);
}, 1600);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  for (let i = 0; i < reveals.length; i++) {
    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
