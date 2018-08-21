/* 
* @Author: Marte
* @Date:   2018-08-18 11:44:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-19 15:48:46
*/

 document.addEventListener('DOMContentLoaded',()=>{
            
            let username    =  document.querySelector('#username');
            let password    =  document.querySelector('#password');
            let confirm_pwd =  document.querySelector('#confirm_pwd');
            let btn         =  document.querySelector('#btn');
            let email       =  document.querySelector('#email');
            let phone       =  document.querySelector('#phone');
            let status      =  [200,304];
            let isok        =  false;

          
            // 注册
            btn.onclick=()=>{
                if(!isok){
                    return false;
                }
                console.log(666);
                // 获取用户名跟密码
                let _username=username.value;
                var _password=password.value;
                var _confirm_pwd=confirm_pwd.value;
                var _email=email.value;
                var _phone=phone.value;
                        // 验证用户名
                       if(!/^[a-z][\w\-]{5,19}$/.test(_username)){
                        alert('您输入的用户名不合法');
                        }   

                        // 登录密码
                        if(!/^\S{8,20}$/.test(_password)){
                            alert('密码不能有空格');
                            return false;  
                        }
                         
                       // 确认密码
                        if(_confirm_pwd != _password){
                            alert('两次输入密码不一致');
                            return false;
                        }
                        // 电子邮箱
                         if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_email)){
                        alert('邮箱格式不合法');
                        return false;
                         }
                         // 手机号码：
                         if(!/^1[3-9]\d{9}$/.test(_phone)){
                        alert('手机号输入有误');
                        return false;
                        }

                 //        // 随机生成验证码
                 // var random  =  document.querySelector('.random');
                 // var vcode    =  document.querySelector('#vcode');

                 //  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
                 //  random.onclick=function(){
                 //    console.log(666);
                 //    randomCode();
                 //  }   
                 //  randomCode();

                 //  // 封装函数
                 //  function randomCode(){
                 //    var _code = '';
                 //    for(var i=0;i<4;i++){
                 //      var index =parseInt(Math.random()*str.length)
                 //      _code +=str[index];
                 //    }
                 //    vcode.innerHTML = _code.toUpperCase();
                 //    console.log(vcode);
                 //  }    



                let xhr=new XMLHttpRequest();
                xhr.onload=()=>{
                    if(status.indexOf(xhr.status)>=0){
                        console.log(xhr.responseText);
                    }
                }
                xhr.open('post','../api/register.php?',true);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`username=${_username}&password=${_password}`);
                }




                        // 随机生成验证码
                 var random  =  document.querySelector('.random');
                 var vcode    =  document.querySelector('#vcode');

                  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
                  random.onclick=function(){
                    console.log(666);
                    randomCode();
                  }   
                  randomCode();

                  // 封装函数生成随机数字或字母
                  function randomCode(){
                    var _code = '';
                    for(var i=0;i<4;i++){
                      var index =parseInt(Math.random()*str.length)
                      _code +=str[index];
                    }
                    vcode.innerHTML = _code.toUpperCase();
                    console.log(vcode);
                  }    



                // 验证用户名是否存在
                username.onblur=()=>{
                   
                let _username=username.value; 
                console.log(_username);
                let xhr = new XMLHttpRequest();
                xhr.onload=()=>{
                    if(status.indexOf(xhr.status)>=0){
                        // var formGroup = username.nextElementSibling;
                        if(xhr.responseText==='yes'){
                            isok=true;
                            
                            // username.nextElementSibling.innerText='';
                            // formGroup.style.display='block';
                           
                            
                        }else if(xhr.responseText==='no'){
                            isok=false;  
                            // username.nextElementSibling.innerText='用户名已存在';
                            // username.nextElementSibling.style.color="#f00";
                 
                           
                        }

                    }
                }
                xhr.open('get','../api/check_username.php?username='+_username,true);
                xhr.send();
            }


        });