// using event:on load to play img in header
var images = ['0.jpg', '1.jpg', '2.jpg','3.jpg','4.jpg']
var index = 0
window.onload =function() {
  interv = setInterval(next, 1500);
}
// button to move slider on right side
function next() {

  if (index < images.length - 1) {
    index++
  } else {
    index = 0
  }
  document.getElementById("image").src = images[index];
}
// button to move slider on left side
function prev() {
if (index > 0) {
  index--
  
} else {
  index = images.length - 1
}
  document.getElementById("image").src = images[index];
}
