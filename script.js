function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

var x = 10;

function movingElement() {
  elmt = document.getElementById("test");
  if (x < 1000) {
    x = x + 1;
  } else {
    x = 10;
  }
  elmt.style.marginLeft = x + "px";
  
}

window.setInterval(movingElement, 10);
