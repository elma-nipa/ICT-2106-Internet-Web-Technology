let Student = [
    {
        Id:2003,
        Name:"Nipa",
        section:"IIT",
        year:"1stYear"
    }
    ,
    {
        Id:2004,
        Name:"Badhon",
        section:"Phy",
        year:"2ndYear"
    },
    {
        Id:2005,
        Name:"Aafifa",
        section:"Chem",
        year:"1stYear"
    }
]


for(let i = 0; i <Student.length; i++) {
    document.writeln("</br>"+Student[i].Id);
    document.writeln("</br>"+Student[i].Name);
    document.writeln("</br>"+Student[i].section);
    document.writeln("</br>"+Student[i].year);
}

Student.shift();
Student.push({
    Id:2010,
    Name:"Raunaq",
    section:"Env",
    year:"MSc"
});


document.writeln("<br/>"+"New result"+"<br/>");

for(let i = 0; i <Student.length; i++) {
    document.writeln("</br>"+Student[i].Id);
    document.writeln("</br>"+Student[i].Name);
    document.writeln("</br>"+Student[i].section);
    document.writeln("</br>"+Student[i].year);
}