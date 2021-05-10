number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(isEven(number));

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


function isEven(num){
   return num.filter(value => (value %2 == 0));
}

