var slideIndex = 0;
Slide();

function Slide() {
  var i;
  var slide = document.getElementsByClassName("hotal");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(Slide, 2000);
}
