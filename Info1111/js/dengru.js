			let users=[{name:'asd',pwd:'111'},{name:'ww',pwd:'111'},{name:'a',pwd:'111'}];
			let gly=[{name:'zs',pwd:'123'},{name:'ls',pwd:'123'}]
			
			let username=document.getElementById("username");
			let pwd=document.getElementById("pwd");
			let btn=document.getElementById("log");
			
			/* Trigger statement when button is clicked */
			btn.onclick=function(){
				/* Iterate over two arrays */
				let ret=users.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				let gly1=gly.some(function(value){
					return value.name==username.value && value.pwd==pwd.value;
				});
				
				/* Determine if the keyboard gets the username and password registered and stored in locaStorage中 */
				if(username.value==localStorage.getItem('username1') && pwd.value==localStorage.getItem('pwd1')){
					alert("User login successful");
					window.location.href="index1.html"
						/* Determine whether it is a preset account and determine whether it is a user or an administrator to jump to respectively */		
				}else if(ret){
					alert("User login successful");
					window.location.href="index1.html"
					
				}else if(gly1){
					alert("Administrator login successful");
					window.location.href="GuanLi.html"
				}else{/* 输入错误 */
					alert("Enter the correct username and password");
				}
			}



























/* function myFunction(){
			var x = document.getElementById("demo").value;
			var z=document.getElementById("name").value;
			var y = document.getElementById("damo");
			
			/*console.log(z);*/
				/*alert('恭喜发财')*/
			/*if(x==""&&z==""){
					alert("表格内不能为空");
						}
			else{
				if(x=="123456"&&z=="my"){
				
					y.href = "图片查看/project.html";
				
					}
					else if(x==""&&z=="my"){
	
						alert("您的密码不能为空");
					
					}
					else if(x=="123456"&&z==""){
	
						alert("您的用户名不能为空");
					
					}
				else{
					alert("您填写的用户名或密码有误，请在输入一遍")
				}
			}
			
		} */