
const msum = (num1,num2,...args) => {
    let sum = num1+num2;
    
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
    return sum;
}

console.log(msum(1,2,3,4,5,6,7,8));