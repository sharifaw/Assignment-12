let array = ['i', 'love', 'programming'];

console.log(join(array,"0"));


function join(arr,char){
    let array =  arr.toString();
    if (char == undefined){
        return array;
    }
        return array.replace(/[',']/g,char);
     
}