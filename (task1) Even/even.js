// for (let number = 1; number <= 20; number++) {
//     if (number %2 ==1) continue;
//     console.log(number);
// }

// function isEven(){
// for (let number = 1; number <= 20; number++) {
//     if (number %2 ==1) continue;
//     console.log(number);
// }
// }

num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function isEven(even){
   return even.filter(num => (num %2 == 0));
}

console.log(isEven(num));
