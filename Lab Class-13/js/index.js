// function buttonClick1() {
//   alert("Hello nipaa");
// }

// function paraClick() {
//   var text = document.getElementById("paraId");
//   text.innerHTML = "This is second para";
// }

//   var paraId=document.querySelector('#paraId');

// function addStyle()
// {
//   var paraId=document.querySelector('#paraId');
//   paraId.style.color="red";
//   paraId.style.fontSize="3rem";
//   paraId.style.fontWeight="bold";
//   paraId.style.fontStyle="italic";
// }

// function Delete()
// {
//   paraId.style=" ";

// }

//better approach using css

// var paraId=document.querySelector('#paraId');

// function addStyle() 
// {
//   paraId.classList.add("para-style");
// }

// function Delete()
// {
//   paraId.classList=" ";
// }

// function next()
// {
//   location.href="templates/next.html";
// }

// function Previous()
// {
//   location.href="../index.html";
// }

//addeventlistener

// var button=document.querySelector('#addstyle');
// button.addEventListener("click",addStyle);

// function addStyle()
// {
//   var paraId= document.querySelector('#paraId');
//   paraId.classList.toggle("para-style");//toggle mane eki button click korle style add hobe. abar click korle style jabe ga
// }
//

//class er kora format
// var button =document.querySelector('#addstyle');
// button.addEventListener("click",function(a,b){
//   var paraId=document.querySelector('#paraId')
//   paraId.innerHTML=(a+b)}(1+3));

//chtagpt form
//   var button = document.querySelector('#addstyle');
// button.addEventListener("click", function() {
//   var paraId = document.querySelector('#paraId');
//   var a = 1;
//   var b = 3;
//   paraId.innerHTML = (a + b);
// });

// //for of
// const names=['ASD','122gh','45ghk'];

// for(let a of names)
// {
//   document.writeln(a);
// }

// //for in loop

// let person={
//   name:"nipa",
//   id:1,
//   profession:"student"
// }

// for(let x in person)
// {
//   document.writeln("<br/>"+ x+":"+person[x]);
// }





// //for each loop
// var number=[1 ,5,8,9];
// number.forEach(function(X){
// document.write(X +"<br/>");
// });

// //arrow fucntion

// const display=()=>{
//   return "<br/>Heelo with return arrow function";
// }

// document.write(display());

// add=(a,b)=>{
//   document.writeln("<br/>"+"add:"+(a+b),"sub:"+(a-b));
// }

// document.writeln(add(10,5));