
    

var mixed = ['hello',10,90.5];
var mix_tuple = []; 
mix_tuple[0] = 120
mix_tuple[1] = 'Kumaran'
console.log(mix_tuple[0]); 
mix_tuple[3] = 'hi'; 
console.log(mix_tuple.length); 
//destructuring tuples var mix_nums = [10,'hello']; var [x,y] = mix_nums; var [y,x,z] = mix_nums; var [p] = mix_nums; console.log(x); console.log(y); console.log(z);//undefined console.log(p);16:32


var numstr = (val : number|string){
    if(typeof(val)=="number"){
        console.log(10+val);
    }
    if(typeof(val)=='string'){

        console.log("welcome"+" "+val);
        
    }
}
numstr(10);
numstr("kiran");

var numstr1 = (val1 :string[]|number|object){
    if(Array.isArray(val1)){
        console.log(...val1);
    }

}

numstr1(["kiran","sai"])