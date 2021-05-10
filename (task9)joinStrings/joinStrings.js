let array = ['i', 'love', 'programming'];

console.log(join(array,"0"));

function joinStrings (arr,char){
    char = " ";
    arr = arr.reduce((count, index) => 
        count+" " + index)
    return final = arr;
}

function join(arr,char){
    let array =  arr.toString();
    if (char == undefined){
        return array;
    }
        return array.replace(/[',']/g,char);
     
}