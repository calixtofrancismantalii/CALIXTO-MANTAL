//OPEN MODAL

function openModal(image, title, num) {
  var body = document.querySelector("body");
  var largeImage = document.getElementById("largeImage");
  var featuredProjectTitleModal = document.querySelector(
    "#featuredProjectTitleModal"
  );
  let modal = document.getElementById("graphics-modal");
  let graphicDescription = document.querySelectorAll(".graphicDescription");
  let graphicDescriptionInModal = document.querySelector(
    "#graphic-description"
  );

  modal.style.display = "block";
  body.style.overflow = "hidden";

  largeImage.src = image;
  featuredProjectTitleModal.innerHTML = title;
  graphicDescriptionInModal.innerHTML = graphicDescription[num].innerHTML;
  console.log(graphicDescription[num].innerHTML);
}

function closeModal() {
  var body = document.querySelector("body");
  let modal = document.getElementById("graphics-modal");
  modal.style.display = "none";
  body.style.overflow = "auto";
}

function changeLargeImage(largeImageSrc) {
  largeImage.src = largeImageSrc;
}
