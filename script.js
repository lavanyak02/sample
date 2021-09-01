document.getElementById("ancor").onmouseenter = function() {mouseEnter()};
document.getElementById("ancor").onmouseleave = function() {mouseLeave()};
function mouseEnter() {
  document.getElementById("ancor").style.color = "blue";
}
function mouseLeave() {
  document.getElementById("ancor").style.color = "blue";
}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

