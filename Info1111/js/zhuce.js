		
			let username1=document.getElementById("username");
			let phone1=document.getElementById("phone");
			let pwd1=document.getElementById("pwd");
			let pwd12=document.getElementById("pwd2");
			let btn1=document.getElementById("log");
			
				/* Triggered by clicking the button */
			btn1.onclick=function(){
				/* Determine if there is unfilled information */
				if(username.value==""||(phone.value=="")||(pwd.value=="")||pwd2.value==""){
					alert("Please fill out the information completely");
				}/* Determine if two passwords are inconsistent */
				else if(pwd1.value==pwd12.value){ 
					/* Store user name and password */
					localStorage.setItem('username1',username.value);
					localStorage.setItem('pwd1',pwd.value);
					/* Pop-up prompts and page jumps */
					alert("User registration is successful \n please login");
					window.location.href="dengru.html";
					window.event.returnValue=false;
					}else{
						alert(" Two times the content of the password does not match! \nPlease re-enter");
					}
				
			} 
