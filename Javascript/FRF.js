var first = function(items){
    var cost = 10;
    return function calculate(items){
        this.items= items;
        var calCost=0;
        if(this.items>100){
         calCost = this.items*8;
        }
        else
        {
         calCost = this.items*10;
        }
        return calCost;

    }
}

var second = first(10);
console.log(second(10));
