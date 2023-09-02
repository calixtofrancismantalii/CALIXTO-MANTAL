function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 30);
    b = setInterval(moveSecond, 30);
  }

  clone();

  let a = setInterval(moveFirst, 30);
  let b = setInterval(moveSecond, 30);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
var body = document.querySelector("body");
const largeImage = document.getElementById("largeImage");

function openModal(src) {
  let modal = document.getElementById("graphics-modal");
  modal.style.display = "block";
  body.style.overflow = "hidden";

  largeImage.src = src;
}

function closeModal() {
  let modal = document.getElementById("graphics-modal");
  modal.style.display = "none";
  body.style.overflow = "auto";
}

function changeLargeImage(largeImageSrc) {
  largeImage.src = largeImageSrc;
}
