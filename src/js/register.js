/* 
* @Author: Marte
* @Date:   2018-08-18 11:44:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-23 00:49:16
*/

 document.addEventListener('DOMContentLoaded',()=>{
            
            let username    =  document.querySelector('#username');
            let password    =  document.querySelector('#password');
            let confirm_pwd =  document.querySelector('#confirm_pwd');
            let btn         =  document.querySelector('#btn');
            let email       =  document.querySelector('#email');
            let phone       =  document.querySelector('#phone');
            var code        =  document.querySelector('#code');
            var scode        =  document.querySelector('#s_code');
            let status      =  [200,304];
            let isok        =  false;
            var random  =  document.querySelector('.random');
            var vcode    =  document.querySelector('#vcode');

            var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var _yzcode = '';//得到字符串

            randomCode();
        //
            // 注册
            btn.onclick=function(){
                console.log('==========')
                if(!isok){
                    return false;
                }
                // console.log(666);
                // 获取用户名跟密码
                let _username=username.value;
                var _password=password.value;
                var _confirm_pwd=confirm_pwd.value;
                var _email=email.value;
                var _phone=phone.value;
                var _code=code.value;     //得到字符串
                var _scode=scode.value;
    
                
          
                        // 验证用户名
                       if(!/^[a-z][\w\-]{5,19}$/.test(_username)){
                        alert('您输入的用户名不合法');
                        return false;
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
                     

                         // 手机号码：
                        if(!/^1[3-9]\d{9}$/.test(_phone)){
                        alert('手机号输入有误');
                        return false;
                        
                        }
                     


                        // 电子邮箱
                         if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_email)){
                        alert('邮箱格式不合法');
                        return false;
                         }
                        

                        if(_yzcode != _code){
                            console.log('yzcode', _yzcode)
                            console.log('_code', _code)
                            alert('验证码有误');
                            return false;
                        }

                        //短信验证码
                         if(!/^\S{4}$/.test(_scode)){
                            alert('短信验证码有误');
                            return false;  
                        }
                       
                         if(!checkbox.checked){
                                 
                                alert('请勾选协议');
                                return this;
                          }




                let xhr=new XMLHttpRequest();
                xhr.onload=()=>{
                    if(status.indexOf(xhr.status)>=0){
                        console.log(xhr.responseText);
                        location.href='login.html';//注册成功跳转登录页；
                    }
                }
                xhr.open('post','../api/register.php?',true);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`username=${_username}&password=${_password}`);
                }



           

                        // 随机生成验证码
                
                  random.onclick=function(){
                    // console.log(666);
                    randomCode();
                  }   
                  

                  // 封装函数生成随机数字或字母
                  function randomCode(){
                    // var span=document.querySelector('span');
                    var content = '';
                    for(var i=0;i<4;i++){
                      var index =parseInt(Math.random()*str.length)
                      content +=str[index];

                    }
                    vcode.innerText = _yzcode = content.toUpperCase();

                    console.log(_yzcode);
                    // console.log(vcode);
                     // return content;
                  }  
              



                // 验证用户名是否存在
                username.onblur=()=>{
                   
                let _username=username.value; 
                // console.log(_username);
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