const num = [1,2,-3,9,-6,-5,4,8,0];
console.log("is Even ",isEven(num));
console.log("is Odd ",isOdd(num));
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

function isEven(even) {
    return even = even.filter(item => (item % 2 == 0));
}

function isOdd(Odd) {
    return Odd = Odd.filter(item => (item % 2 == 1));
}