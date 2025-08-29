
function randomNum() {
  var a = parseInt(document.getElementById("minNum").value);
  var b = parseInt(document.getElementById("maxNum").value);
  let number = Math.random()*b;

  document.getElementById('output').innerHTML="Random number"+ number;
}

//  var text = document.getElementById("output");
//   text.innerHTML = i;
