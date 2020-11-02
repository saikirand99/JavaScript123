var sum=(a,b=20)=>{
    return a+b;
}

console.log(sum(10,20));

var sumarg=(...arguments)=>{
    var suma=0;
    for (i in arguments){
        suma=suma+arguments[i];
    }
    console.log(suma);
}
sumarg(10,20);