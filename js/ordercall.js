const btn = document.querySelector("button");
const modal = document.getElementById("myModal");

const close = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
