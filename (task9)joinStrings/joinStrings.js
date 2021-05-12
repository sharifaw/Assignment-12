let array = ['i', 'love', 'programming'];

console.log(joinStrings(array,"0"));


function joinStrings(arr,char){
    let array =  arr.toString();
    if (char == undefined){
        return array;
    }
        return array.replace(/[',']/g,char);    
}