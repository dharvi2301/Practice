function demo_1(){
document.getElementById("demo_1").innerHTML="Hello World";
}

function on(){
    document.getElementById("light").src='./assets/on.jpg';
}

function off(){
    document.getElementById("light").src="./assets/off.jpg";
}

function changeCSS(){
    document.getElementById("CSS").style.color="red";
}

function hide(){
    document.getElementById("hide").style.display="none";
}

function show(){
    document.getElementById("show").style.display="block";
}

function add(){
    var x=5;
    var x=7;
    var y=1;
    var z=x+y;
    document.getElementById("add").innerHTML=z;
}

function sub(){
    let x=10;
    let y=8;
    //Not allowed let y=3;
    let z=x-y;
    document.getElementById("subtract").innerHTML=z;
}

function array(){
    const colors=["Red","Yellow","Blue","Green"]
    colors.push("Pink")
    document.getElementById("array").innerHTML=colors[4];
}

function object(){
    const data=
    {
        name:"John",
        age:34,
        address:"Street 3"
    }
    data.fav="movie";
    document.getElementById("object").innerHTML=JSON.stringify(data);
}

function Constructor(firstName,lastName,age,color){
this.firstName=firstName;
this.lastName=lastName;
this.age=age;
this.color=color;
this.fullName=function(){
    return this.firstName + " "+ this.lastName;
}
}

const p1=new Constructor("John","Doe",34,"Blue")
const p2=new Constructor("Jimmy","Martin",90,"Red")

p2.changeName=function(name){
    this.firstName=name;
}

p2.changeName("Harry")

function getConstructor()
{
    // document.getElementById("object_constructor").innerHTML=p2.firstName;
    document.getElementById("object_constructor").innerHTML= p1.fullName();
}

function array(){
    const fruits=["Mango","Kiwi","Apple"];
    fruits.splice(2,2,"Stawberry");
    document.getElementById("arraySplice").innerHTML=fruits;
}

function condition(){
    // const currentTime=new Date();
    if(new Date().getHours() < 12)
    {
        document.getElementById("condition").innerHTML="Good Morning";

    }
    else if(new Date().getHours() < 16)
    {
        document.getElementById("condition").innerHTML="Good Noon";
    }
    else{
        document.getElementById("condition").innerHTML="Good Night";
    }
}

function switchCase(){
    switch(new Date().getDay()){
        case 0:
        day="Sunday";
        break;

        case 1:
        day="Monday";
        break;

        case 2:
        day="Tuesday";
        break;

        case 3:
        day="Wednesday";
        break;

        default:
        "There is no day existing."
    }

    document.getElementById("switchCase").innerHTML="It will be reflected here:: "+ day;
}

function forLoop(){
    let text=""
    for(let i=0;i<6;i++){
        text+="The number is:" +i+"<br>";
    }
    document.getElementById("forLoop").innerHTML=text;
}

function forIn(){
    let text="";
    const person={
        firstName:"John",
        lastName:"Doe",
        age:23,
        color:"red"
    }

    for (let x in person){
    text+=person[x]+"<br>";
    }
    document.getElementById("forIn").innerHTML=text;
}

function forEach(){
    const numbers=[20,4,78,90];
    let text="";
    numbers.forEach(myFunction);
    function myFunction(value){
text+=value + "<br>";
    }

    document.getElementById("forEach").innerHTML=text;
}

function forOf(){
    const language="Javascript";
    let text="";
    for (let x of language){
        text+=x+"<br>";

    }
    document.getElementById("forOf").innerHTML=text;
}

function classess(){
    class Car{
        constructor(name,year){
            this.name=name;
            this.year=year;
        }

        age(){
            const date=new Date();
            return date.getFullYear()-this.year;
        }
    }
    const myCar=new Car("Ford",2017)
    document.getElementById("classess").innerHTML="My car is "+ myCar.age()+"years old."
}

function inheritance(){
    class Car{
        constructor(brand){
            this.brand=brand;
        }

        present(){
            return "This is the :"+ this.brand
        }       
    }
    class Model extends Car{
        constructor(brand,model){
            super(brand);
            this.model=model;
        }
        show(){
            return "This is the :"+this.brand+"This is the model:"+this.model;
        }

    }
    const myCar=new Model("Ford","Mustang");
    document.getElementById("inheritance").innerHTML=myCar.show();
}

function static(){
    class person{
        constructor(name){
            this.name=name;
        }

        static hello(x){
            return "Hello I am the person."+x.name;
        }
    }
    const person1=new person("Jerry");
    document.getElementById("static").innerHTML=person.hello(person1);
}

const obj1={name:"John"}
const result=Object.assign({},obj1)
result.name="xyz"


console.log("result>>>>",result.name+""+obj1.name)

