const number = [1,2,-3,9,-6,-5,4,8,0];

console.log("is Even ",isEven(number));

console.log("is Odd ",isOdd(number));
// for (let int = 0; int < num.length; int++) {
//     if (num[int] %2 ==0) {
//         console.log(num[int]," is even");
//     }  
//     else {
//         console.log(num[int]," is odd");
    
//     }
    
// }

// oddorEven();
// function oddorEven() {
//   for (let int = 0; int < num.length; int++) {
//     if (num[int] %2 ==0) {
//         console.log(num[int]," is even");
//     }  
//     else {
//         console.log(num[int]," is odd");
    
//     } 
// }
// }

function isEven(num) {
    return num = num.filter(item => (item % 2 == 0));
}

function isOdd(num) {
    return num = num.filter(item => (item % 2 == 1));
}