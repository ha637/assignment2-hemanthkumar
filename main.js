function addRecord(){
               var date = new Date();
			   var hours = date.getHours();
               var minutes = date.getMinutes();
               var studentName= document.getElementById("name").value+ "";
               var studentMajor= document.getElementById("major").value+ "";
               var studentYear= document.getElementById("year").value+ "";
               
			   
			   if (studentYear >= 2000 && studentName != " " && studentMajor != " ")
               {                  
                document.getElementById("records").innerHTML += "<br />" +hours+":"+minutes+" - "+studentName+", "+studentMajor+", "+studentYear;
               document.myForm.name.value=" ";
               document.myForm.major.value=" ";
               document.myForm.year.value=" "; 
                }

               else if (studentName == " ")
                {
                                window.alert ("Please enter name");
                }
				
				else {
                        window.alert ("please enter an year greate than or equal to 2000");
                                             }
               if(studentMajor == " ")
                {
                                alert ("Please enter major");
                }

               
               }
			   
            	
