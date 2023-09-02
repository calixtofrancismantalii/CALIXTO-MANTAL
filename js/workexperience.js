$(document).ready(function () {
  let workexperienceDescription = document.getElementsByClassName(
    "work-experience-card-wrapper"
  );

  let yearExperience = document.querySelectorAll(".yearExperience");

  workexperienceDescription[0].style.marginLeft = "0px";
  workexperienceDescription[0].style.position = "absolute";
  yearExperience[0].setAttribute("class", "yearExperience active");
});

function showExperinceDescription(work) {
  const workexperienceDescription = document.getElementsByClassName(
    "work-experience-card-wrapper"
  );
  let yearExperience = document.querySelectorAll(".yearExperience");

  for (let i = 0; i < workexperienceDescription.length; i++) {
    if ((workexperienceDescription[i].style.marginLeft = "700px")) {
      workexperienceDescription[work].style.marginLeft = "0px";
      workexperienceDescription[work].style.position = "absolute";
      workexperienceDescription[work].style.top = "0px";
    }

    for (let j = 0; j < yearExperience.length; j++) {
      if (yearExperience[j].classList.contains("active")) {
        yearExperience[j].classList.remove("active");
        yearExperience[work].setAttribute("class", "yearExperience active");
      }
    }
  }
}
