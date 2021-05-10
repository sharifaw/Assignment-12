const input = prompt("Enter your number");

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

nars(input);
function nars(item){
    console.log("item 1 ",item);
    array = Array.from(String(item), Number);
    let result = 0;
    console.log("item 2 ",item);
    console.log("item Lenght ",item.length);
    sumArr2 = array.map((value)=>(value**item.length));
    console.log("sumArr2 ",sumArr2);
    result = sumArr2.reduce((preVal,currVal)=>(preVal + currVal),0);
    console.log("result ",result);
    console.log("item ",item);
    return (result === Number(item))? alert("Narcissistic Number"):alert("Not Narcissistic Number");
}