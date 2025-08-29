// //lab 9 works
// var a=10;
// var b="nipa";
// var c=23.67;
// document.writeln(typeof(a));
// document.writeln(typeof(b));
// document.writeln(typeof(c));

// let s= a.toString();
// document.writeln(typeof(s));

// let v="100";
// v=parseFloat(v);
// document.writeln(typeof(v));

// let m=245.789;
// let n= parseInt(m);
// document.writeln(typeof(n));
// let p=234.6789;

// document.writeln("<br/>"+ Number(b));
// document.writeln("<br/>"+ Number(s));
// document.writeln("<br/>"+ m.toFixed(2));
// document.writeln("<br/>"+ m.toPrecision(4));

// let a= prompt("enter your first num");
// let b=prompt("enter your second num");
// let sum= Number(a)+Number(b);
// let sub= Number(a)-Number(b);
// let Mul= Number(a)*Number(b);
// let div= Number(a)/Number(b);

// document.writeln("<br/> <p style='color:blue;'>"+sum+"<p/>");
// document.writeln("<br/> <p style='color:blue;'>"+sub+"<p/>");

// document.writeln("<br/> <p style='color:blue;'>"+Mul+"<p/>");

// document.writeln("<br/> <p style='color:blue;'>"+div+"<p/>");

 //document.writeln("</br> <p style='color:blue;'>"+add+"</p>");

 //lab 10 works

//  var  age= 20;
//  var result=(age>=18)? 'adult': 'minor';
// document.writeln(result);

// var day=3;
// var dayName;
// switch(day){
//     case 1:
//         dayName="sunday";
//         break;
//     case 2:
//         dayName="Monday";
//         break;
//     case 3:
//         dayName="Tuesday";
//         break;
//     case 4:
//         dayName="wednesday";
//         break;
//     default:
//         dayName="invalid day";
// }

// document.writeln(dayName);

// function square(num1,num2)
// {
//     return num1*num2;
// }

// let ans=square(3,7);
// document.writeln("<br/> <p style='color:green;'>"+ans+"<p/>");

// var num1=prompt("enter the 1st num");
// var num2= prompt("enter the 2nd num");

// (function square(num1,num2){
//     document.writeln("<br/> <p style='color:green;'>"+num1*num2+"<p/>");
// })(num1,num2);  // ekhane r call korar dorkar hoy na. directly hoye jay

// let names=['nipa','nowrin','abbu','ammu','vaiya'];
// document.writeln("<br/> <p style='color:blue;'>"+names+"<p/>");

// var firstname= new Array(1);
// var lastname=new Array(1);

// firstname[0]='ami';
// firstname[1]='nipa';
// lastname[0]='from';
// lastname[1]='iit';
// document.writeln(firstname.concat(lastname));

// let arr=[2,4,5,6];
// arr.push(10)
// //document.writeln(arr);
// arr.pop();
// //document.writeln(arr);
// arr.shift();
// document.writeln(arr);
// arr.unshift(10);
// document.writeln(arr);

// var numbers=[100,3,69,56,20,2];
// numbers.sort(function(a,b){
//     return a-b;
// });
// document.writeln(numbers);

//lab :11

// var student={
//     name:"nipa",
//     roll:2003,
//     dept:"iit"
// };
// document.writeln(student.name +"+"+ student.roll+"+"+student.dept);

// function Student(name,roll,dept)
// {
//     this.name=name;
//     this.roll=roll;
//     this.dept=dept;

//     this.display=function(){
//         document.writeln(this.name +" "+ this.roll+" "+this.dept);
//     }
// }

// var student1=new Student("nipa",2003,"iit");
// student1.display();

// var text=document.getElementById("paraId");
// text.innerHTML="<span style='color:red';> heilloooo </span>";
// document.writeln(text);

// const student=[
//     {
//         name:"nipa",
//         dept:"iit",
//         age:21
//     }
//     ,
//     {
//         name:"abd",
//         dept:"phy",
//         age:20
//     }
//     ,
//     {
//         name:"shaon",
//         dept:"chem",
//         age:25
//     }
// ];

// for(let i=0;i<student.length;i++)
// {
//     document.writeln("<br/>"+student[i].name);
//     document.writeln("<br/>"+student[i].dept);
//     document.writeln("<br/>"+student[i].age);
// }

//lab -12

// function buttonclick1()
// {
//     alert("eii ami nipaaaaaa");
// }

// function changepara()
// {
//     var text=document.getElementById("paraId");
//     text.innerHTML="heilloo";
// }

// function Imgchange(){
//     var elm=document.getElementById("imgId");
//     elm.src="images/img1.jpg";
// }


//lab 13

// function clickme(){
//     var text= document.getElementById("paraId");
//     text.innerHTML="this is the second para";
// }

// function addStyle()
// {
//     var paraId= document.getElementById("paraId");
//     paraId.style.color="red";
//    paraId.style.fontWeight="bold";
//     paraId.style.fontSize="3rem";
//     paraId.style.fontStyle="italic";
// }
// function Delete()
// {
//      paraId.style=" ";
// }

// var paraId=document.getElementById("paraId");

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
//     location.href= "templates/next.html";
// }
// function previous()
// {
//     location.href="../index.html";
// }

// var button= document.getElementById("addstyle");
// button.addEventListener("click",addStyle);

//  function addStyle()
// {
//   var paraId= document.querySelector('#paraId');
//   paraId.classList.toggle("para-style");//toggle mane eki button click korle style add hobe. abar click korle style jabe ga
// }

//   var button = document.querySelector('#addstyle');
// button.addEventListener("click", function() {
//   var paraId = document.querySelector('#paraId');
//   var a = 1;
//   var b = 3;
//   paraId.innerHTML = (a + b);
// });


 greet=()=>
{
  return "hello from arrow nipa";
}

document.writeln(greet());












