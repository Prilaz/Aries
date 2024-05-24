/*const pi=3.14159;
let radius;
let circumference;

radius=window.prompt("Enter the radius");
radius=Number(radius);

circumference=2*pi*radius;

console.log(circumference);*/
let radius;
let circumference;
const PI=3.14159;

document.getElementById("mysubmit").onclick = function(){
    radius=document.getElementById("num").value ;
    radius=Number(radius);
    circumference=2*PI*radius;

    document.getElementById("myh2").textContent=circumference;
}