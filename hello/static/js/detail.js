function upDown() {
  let x = document.getElementsByClassName("fa fa-chevron-down");

  if (x !== undefined) {
    x.className = "fa fa-chevron-up";
    let lessonName = document.getElementsByClassName("lesson-name");
    lessonName.style.display = "none"
  } else {
    x.className = "fa fa-chevron-down";
    let lessonName = document.getElementsByClassName("lesson-name");
    lessonName.style.display = "block"
  }
}