// var nam=docume
function validate(){
    if(document.getElementById("uname").value==""){
        alert("Enter your Name");
        document.registerform.username.focus();
    }
    else if(document.getElementById("uage").value==""){
        alert("Enter your Age");
        document.registerform.uage.focus();
    }
    else if(document.getElementById("psw").value==""){
        alert("Enter Password");
        document.registerform.password.focus();
 
    }
    else if(document.getElementById("f1").checked==""||
            document.getElementById("m1").checked==""){
                alert("select Your Gender");
                document.registerform.gender[0].checked=true;
            }
            // else{
            //     alert("you are registered");
            //     document.registerform.submit();
            // }
          else{
                 validateuser();
                //  alert("You are successfully registered ");
                
             }
    }
 
     function validateuser(){
        var uns=["Afrose","Kalaigar","Bhavya","sai"];
      var f=0;
      var uname1=document.getElementById("uname").value;
        // uname=prompt('Enter username');
     for(let i=0;i<uns.length;i++){
             if(uname1==uns[i])
            {
               
                f=1;
                break;
            }
                      
         }
         if(f==1){
              alert("username already exists");
         }
         else{
             document.registerform.submit();
 
        // document.write('welcome user');
        }
     }