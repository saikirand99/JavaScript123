var student ={

    name :'kiran',
    desigantion : 'intern',
    great:function(){
        console.log('good day')
    },
    hobbies :['sports','sleep'],
    address :{
        city : 'Bangalore',
        state : 'state'
    }

}

console.log(student.name)
console.log(student.desigantion)
student.great()
for(const stud in student){

    var prop = student[stud];
    if(prop instanceof Array){
        for(let i in prop){
            console.log(prop[i])
        }
    }
    else if(typeof(prop)=='function'){
        prop();
    }
    

}
