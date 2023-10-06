var webBox = document.querySelector(".websiteMainContainer");
var graphicBox = document.querySelector(".graphicsMainContainer");
var projectMenu = document.querySelectorAll(".projectMenu");
var websiteLink = document.querySelectorAll(".websiteLink");
var graphicLink = document.querySelectorAll(".graphicLink");

//By Default Web Development is Selected
projectMenu[0].setAttribute("class", "projectMenu active");
//Disable link in first load
for (var h = 0; graphicLink.length > h; h++) {
  graphicLink[h].style.pointerEvents = "none";
}

//Focus on Graphics
function slideGraphic() {
  graphicBox.style.marginRight = "0px";
  graphicBox.style.opacity = "100";
  webBox.style.marginLeft = "-300px";
  webBox.style.opacity = "0.4";

  //Activate Graphic Links
  for (var h = 0; graphicLink.length > h; h++) {
    graphicLink[h].style.pointerEvents = "";
  }

  //Disable Website Links
  let websiteLink = document.querySelectorAll(".websiteLink");
  for (var i = 0; websiteLink.length > i; i++) {
    websiteLink[i].style.pointerEvents = "none";
  }

  //Highlight Selected Category
  if ((projectMenu[0].class = "active")) {
    projectMenu[0].classList.remove("active");
    projectMenu[1].setAttribute("class", "projectMenu active");
  }
}

//Focus on Web Development
function slideWeb() {
  webBox.style.marginLeft = "0px";
  webBox.style.opacity = "100";
  graphicBox.style.marginRight = "-300px";
  graphicBox.style.opacity = "0.4";

  //Activate Website Links
  let websiteLink = document.querySelectorAll(".websiteLink");
  for (var j = 0; websiteLink.length > j; j++) {
    websiteLink[j].style.pointerEvents = "";
  }

  //Highlight Selected Category
  if ((projectMenu[1].class = "active")) {
    projectMenu[1].classList.remove("active");
    projectMenu[0].setAttribute("class", "projectMenu active");
  }

  //Disable Graphic Links
  let graphicLink = document.querySelectorAll(".graphicLink");
  for (var h = 0; websiteLink.length > h; h++) {
    graphicLink[h].style.pointerEvents = "none";
  }
}
