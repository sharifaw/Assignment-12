const inputNumber = prompt("Enter your number");


//let result = 0;
// for (let count=0; count < input.length; count++) {
//     result += input[count] ** 3;
// }

// if (result == input) {
//     alert("Narcissistic Number");
// }
// else{
//     alert("Not Narcissistic Number");
// }
// narcissistic();
// function narcissistic() {
//     for (let count=0; count < input.length; count++) {
//         result += input[count] ** input.length;
//     }
    
//     if (result == input) {
//         alert("Narcissistic Number");
//     }
//     else{
//         alert("Not Narcissistic Number");
//     }   
// }

narcissistic(inputNumber);
function narcissistic(item){
    array = Array.from(String(item), Number);
    let result = 0;
    powarray = array.map((value)=>(value**item.length));
    result = powarray.reduce((accumulator,currVal)=>(accumulator + currVal),0);
    return (result === Number(item))? alert("Narcissistic Number"):alert("Not Narcissistic Number");
}