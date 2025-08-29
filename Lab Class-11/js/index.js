//variable practice

// var student1 = {
//   name: "Nipa",
//   roll: 2003,
//   year: "2nd",
//   courses: ["ds", "dld", "stat", "iwt", "dc"],
// };

// document.writeln(
//   student1.name +
//     " " +
//     student1.roll +
//     " " +
//     student1.year +
//     " " +
//     student1.courses +
//     " "
// );

//constructor

// function Student(name, roll, year, courses) {
//   this.name = name;
//   this.roll = roll;
//   this.year = year;
//   this.courses = courses;

//   this.display = function () {
//     document.writeln(
//       this.name + " " + this.roll + " " + this.year + " " + this.courses + " "
//     );
//   };
// }

// var Student2 = new Student("nipui", 2,2025,["ds","dld","iwt","stat"]);
// Student2.display();

// document.writeln("</br>"+ Student2.courses[0]);

// document.writeln("</br>"+ Student1.courses[3]);

//DOM

var text=document.getElementById("pract-1");
document.writeln(text);
text.innerHTML="<span style='color: red;'>heiloo</span>";

// var text1=document.getElementsByTagName("h3");
// document.writeln(text1[1].innerText);

for(let i=0;i<4;i++)
{
var text1=document.getElementsByTagName("h3");
text1[i].style.color = "red";
}


const Student = [
    {
        name: "Nipa",
        age: 21,
        dept: "Computer Science"
    }
    ,
    {
        name: "elma",
        age:24,
        dept: "phy"
    },
    {
        name: "abd",
        age: 25,
        dept: "chem"

    },
]


for(let i = 0; i <Student.length; i++) {
    document.writeln("</br>"+Student[i].name);
    document.writeln("</br>"+Student[i].age);
    document.writeln("</br>"+Student[i].dept);
}

 var text2=document.querySelector('.header3');
 document.writeln(text2.innerText);

  var text3=document.querySelectorAll('.header3')[1];//all bole ekhane bole dite hoitese kontake daktese??
 document.writeln(text3.innerText);

 document.querySelector(".my-div a").innerHTML="new-contact";