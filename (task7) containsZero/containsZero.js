array = [18,15,0,16,5,60,7,-2,-6];

console.log(isContainZero(array));

function isContainZero(num){
    //return num = num.includes(0);
    return num.some((value)=> (value ==0))
}