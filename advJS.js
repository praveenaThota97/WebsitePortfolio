str='I\'am "Praveena"';
console.log(str);
str1='It\'s fun to learn "JS"';
console.log(str1);
if(str!=""){
    console.log("String contains a value");
}else{
    console.log("string is empty");
}
//let noOfItems=12;
var noOfItems=prompt("enter noOfItems:");
let season=prompt("enter season");
console.log(noOfItems);
if(noOfItems==12){
    console.log("It's a dozen");
}else if(noOfItems==6){
    console.log("It's half dozen");
}else{
    console.log("Its not a dozen");
}
switch(season){
    case "summer":
        console.log("It's Hotttttttt");
        break;
    case "winter":
        console.log("It's coldddddd");
        break;
    case "autumn":
        console.log("It's pleasant");
        break;
    case "rainy":
        console.log("I like ittttt");
        break;
    default:
        console.log("I dont know which season is this!!!!");
        break;
}
var num=5;
for(let i=1; i<=10;i++){
    let res=num*i;
     console.log(num+"*"+i+"="+res);
}
while(num>=5){
    num++;
    if(num==15){
        break;
    }
    if(num==10){
        continue;
    }
    console.log(num);
}
function number1(){//without parameters & without return values
    var a=10,b=20;
    console.log(a+b);
}
function number2(a,b){//with parameters & without return values
    //var a=10,b=20;
    console.log(a+b);
}
number1();
number2(100,400);
number2(400,400);
number2(500,400);
console.log("#########");
function number3(a,b){//with parameters & with return values
    //var a=10,b=20;
    return a+b;
}
var sum1=number3(200,700);
console.log(sum1);
console.log("#########");
function number4(){//without parameters & with return values
    var a=10,b=20;
    return a+b;
}
var sum2=number4();
console.log(sum2);

