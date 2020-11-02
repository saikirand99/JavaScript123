function Student(){}

Student.prototype.name="";
Student.prototype.pname=function(){
    console.log(this.name)
}


student=new Student();
student.name='ram';
console.log(student.name);
student.pname();

