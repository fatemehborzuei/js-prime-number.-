alert("welcome to website")
confirm("do you want to learn website?")
prompt("how old are you?")
//let normal variable
//const constant variable
//var
//let full name="fatemehborzuei";
//let age=23;
//null
let number = Number(prompt("یک عدد وارد کنید:"));

if (number < 7) {
    alert("عدد اول نیست");
    console.log("عدد اول نیست");
} else if (number === 7) {
    alert("عدد اول است");
    console.log("عدد اول است");
} else if (number % 7 === 0) {
    alert("عدد اول نیست");
    console.log("عدد اول نیست");
} else {
    if (isPrime) {
        alert("عدد اول است");
        console.log("عدد اول است");
    } else {
        alert("عدد اول نیست");
        console.log("عدد اول نیست");
    }
}