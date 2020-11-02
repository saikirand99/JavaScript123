function greetUser(name:string){
    return 'welcome'+name;
}
   console.log(greetUser('ram'));
    
   function addNumbers(...nums:number[]){
    var sum =0;
    for (var i=0;i<nums.length;i++){
    sum+=nums[i];
    }
    console.log(sum);
   }
   addNumbers();
   addNumbers(10,20,30);
   addNumbers(10,20,30,40,50);


function miss(name1:string,city:string){
    console.log(`${name1} and ${city}`);
}

miss("kiran","bangalore");

var checktype = (a:number,b:number)=>{

    console.log(a+b);
}

checktype(10,20)
checktype(10,20);