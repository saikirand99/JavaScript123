function Sum(fnum,snum,tnum){
    this.fnum=fnum;
    this.snum=snum;
    this.tnum=tnum;
    this.add1=function(){
        console.log(this.fnum+this.snum+this.tnum);
    }

}
sum=new Sum(10,20,30);
sum.add1();

var total = (function sum(x,y,z){
    return x+y+z;
})(10,20,30);
console.log(total);


var avg=function(x,y)
{
    return function(){
        return x+y;
    }

}

var result = avg(10,20);
console.log(result()/2);

var avg=function(x,y)
{
    return function(){
        return x+y;
    }()/2

}

var result = avg(10,20);
console.log(result);


