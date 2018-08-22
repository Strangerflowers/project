/* 
* @Author: Marte
* @Date:   2018-08-22 20:13:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-22 21:03:53
*/

 document.addEventListener('DOMContentLoaded',()=>{
            
            let username    =  document.querySelector('#username');
            let password    =  document.querySelector('#password');
            let btn         =  document.querySelector('.btn_login');
           
          
            let status      =  [200,304];
            let isok        =  false;

          
            // 登录
            btn.onclick=()=>{
                
                
                // 获取用户名跟密码
                let _username=username.value;
                var _password=password.value;

                let xhr=new XMLHttpRequest();
                xhr.onload=()=>{
                    if(status.indexOf(xhr.status)>=0){
                        // console.log(xhr.responseText);
                        if(xhr.responseText === 'success'){
                            location.href = '../index.html';
                        }
                        
                    }
                }
                xhr.open('post','../api/login.php',true);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`username=${_username}&password=${_password}`);
                }


                // 验证用户名是否存在
                username.onblur=()=>{
                   
                let _username=username.value; 
                console.log(_username);
                let xhr = new XMLHttpRequest();
                xhr.onload=()=>{
                    if(status.indexOf(xhr.status)>=0){
                       
                        if(xhr.responseText==='yes'){
                            isok=true;                                
                            
                        }else if(xhr.responseText==='no'){
                            isok=false;  
                           
                           
                        }

                    }
                }
                xhr.open('get','../api/check_username.php?username='+_username,true);
                xhr.send();
            }



        });
