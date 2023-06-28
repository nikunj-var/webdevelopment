var magera = {
    name :"agera",
    manufactur : {
        name:"abcde",
        location : "sweden"
    },
    topSpeed:490,
    color : "black",
    spoilers : false,
    applybrakes : function(){
        setTimeout(function(){
            console.log('car stopped');
        },5000)
        console.log('car is running')
    }
}

console.log(magera.applybrakes())