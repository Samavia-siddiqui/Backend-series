//Fundamentals of JavaScript
// ForEach,map,filter,find,indexOf
//practicing fundamental of js for backend 
// ForEach
let arr=[1,2,3,4]
arr.forEach(function(value){
    console.log(value+" Hello")
})
// Map
let newarr=arr.map(function(value){
    return value*2
})
console.log(newarr);

// Filter
let filterarr=arr.filter(function(value){
    return value>2
})
console.log(filterarr);

//indexOf
let indexOfarr=arr.indexOf(3)
console.log(indexOfarr);
//Find
let findarr=arr.find(function(value){
    return value>2
})
console.log(findarr);