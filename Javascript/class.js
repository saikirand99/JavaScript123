function Student(name,age){
    this.name=name;
    this.age=age;
    this.getDetails=function(){
        console.log(this.name,this.age)

    }
}

student=new Student('kiran',20)
console.log(student.name);
student.getDetails();
Student.prototype.height=6;
student1=new Student('sai',30);
student1.getDetails();

