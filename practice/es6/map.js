console.clear();

const marr = [1,2,3,4,5];
let newarr = [];
const doublevalues = (item) =>{
    return item*2;
}

for(let i=0;i<marr.length;i++){
    newarr.push(doublevalues(marr[i]));
}
console.log(newarr)

let newmaparr = [];
newmaparr = marr.map((item) =>{
    return item*2;
})
console.log(newmaparr);
