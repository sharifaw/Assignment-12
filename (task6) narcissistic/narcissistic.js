const input = prompt("Enter your number");
let result = 0;
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

nars();
function nars(result){
    result.reduce((count,result) => 
    count+result,0)/result.length;
    console.log(average);
    if (result == input) {
        alert("Narcissistic Number");
    }
    else{
        alert("Not Narcissistic Number");
    }   
}
