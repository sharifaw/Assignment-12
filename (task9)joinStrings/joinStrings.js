let array = ['i', 'love', 'programming'];

console.log(joinStrings(array,"0"));


function joinStrings(arr,char){
    let array =  arr.toString();
    return (char == undefined)? array :  array.replace(/[',']/g,char);
}