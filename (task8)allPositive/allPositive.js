array = [18,50,16,10,5,20];

console.log(isAllPositive(array));

function isAllPositive(element) {
    return element.every((num)=> num >0);
}