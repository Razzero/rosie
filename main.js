console.log('Hello World!');
var y = document.getElementById("yes")
var n = document.getElementById("no")
var p = document.getElementById("p")



function no(min, max){
  var math = Math.floor(Math.random() * (max - min + 10)) + min + "px";
  var maths = Math.floor(Math.random() * (max - min + 1)) + min + "px";
  n.style.transition = ".2s"
  /*n.style.position = "relative"*/
  n.style.top = math
  n.style.left = maths
  
  p.style.position = "relative"
  p.style.fontSize = "15px"
  p.innerText = "just click the 'yes' button"
}

setInterval(function(){
  n.style.transition = ".5s"
},10)