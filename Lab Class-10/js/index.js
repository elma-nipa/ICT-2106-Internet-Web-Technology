// //if-else diye

// var a = Number(prompt("Enter the number"));
// if (a > 10) {
//   document.writeln("a is greater than 10");
// } else {
//   document.writeln("a is less than or equal to 10");
// }

//ternery operator

// a > 10
//   ? a == 10
//     ? document.writeln("a is equal to 10")
//     : document.writeln("a is not equal to 10")
//   : document.writeln("a is greter than 10");
// var num1 = Number(prompt("Enter the number-1"));
// var num2 = Number(prompt("Enter the number-2"));

//switch case

// //using function
// document.writeln("</br><span style='color:green'>" + square(num1, num2)+ "</span>");

// function square(num1,num2) {
// //   document.writeln("</br><span style='color:green'>" + num1*num2 + "</span>");
// return num1*num2; 
// }

//immediately invokable function expression(IIFE)
// (function square(num1,num2) {
//  document.writeln("</br><span style='color:green'>" + num1*num2 + "</span>");
// })(num1,num2);


//array

let names=['nipa','nowrin','vaiya','abbu','ammu'];
document.writeln("</br><span style='color:green'>" +names+ "</span>")

let firstName=new Array();
firstName[1]="khadizaapu";
document.writeln("</br><span style='color:green'>" +firstName+ "</span>")

//concatening

var firstArray=new Array(1);

var secondArray=new Array(1);

firstArray[0]="I'm";
firstArray[1]="nipa";
secondArray[0]="from";
secondArray[1]="IIT_14";
 document.writeln(firstArray.concat(secondArray));

//array function

for(let i=0;i<firstArray.length;i++)
{
    document.writeln(firstArray[i]+"+");
}
for(let j=0;j<secondArray.length;j++)
{
    document.writeln(secondArray[j]+"+");
}

//array push,pop,shift,unshift

//array splice,slice,reverse

//sorting number is not possible
var numbers=[100,234,23,21,2,56];
numbers.sort(function(a,b){
    return a-b;
})
document.writeln("</br>"+numbers);

//2D array

var array2d=[[1,'A'],[2,'B'],[3,'C']];

for(var i=0;i<array2d.length;i++)
{
   for(var j=0;j<array2d[i].length;j++)
   {
    document.writeln("</br>"+array2d[i][j]);
   }
}



