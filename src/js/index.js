/* 
* @Author: Marte
* @Date:   2018-08-20 18:56:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-23 15:52:11
*/

document.addEventListener('DOMContentLoaded',function(){

    // 吸顶菜单
    var topd=document.querySelector('.topd');
    var whole_top = document.querySelector('#whole_top');
    var header = document.querySelector('#header');
    var nav = document.querySelector('#nav');
    var body=document.querySelector('body');
    window.onscroll=function(){
        var scrollY = window.scrollY;
        var content='';
        if(scrollY>=(whole_top.offsetHeight+header.offsetHeight+nav.offsetHeight)){
            console.log('if')
            content=`
                     <div class="top">
                        <div class="s_top">
                            <div class="stop_l fl ">
                                <span>全部分类</span><br />
                                <i class="msg"><></i> 
                            </div>
                            <img src="img/logo-1.png" alt="" class="fl " />
                             <div class="stop_c fl">
                                <input type="search" name="search"/>
                                <span>搜索</span>
                            </div>
                            <div class="stop_r fr ">
                                <p class="fl"><a href="html/login.html" class="a1">登录</a></p>
                                <p class="fl"><a href="html/register.html">注册</a></p>
                            </div>
                        </div>
                    </div>
                    `
         topd.innerHTML=content;
         topd.style.display = 'block';
         // console.log('content', content)
        // console.log(666);
        }else{
            
            topd.style.display='none';
            console.log(555);
            
        }
        // console.log('topd', topd)
        topd.innerHTML=content; 
    }



// 轮播图

            let banner = document.getElementsByClassName('banner')[0];
            let ul = banner.children[0];

            // 初始化
            let index = 0;

            // 无缝滚动关键1：把第一张复制到最后
            ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            // 设置ul宽度，实现水平排列效果
            ul.style.width = banner.clientWidth * len + 'px';

            // 添加分页
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=0;i<len-1;i++){
                let span = document.createElement('span');
                span.innerText = i+1;
                if(i===index){
                    span.className = 'active';
                }

                page.appendChild(span);
            }
            banner.appendChild(page);


            // 添加上一张、下一张按钮
            let btnNext = document.createElement('span');
            btnNext.className = 'btn-next';
            btnNext.innerHTML = '&gt;';

            let btnPrev = document.createElement('span');
            btnPrev.className = 'btn-prev';
            btnPrev.innerHTML = '&lt;';

            banner.appendChild(btnPrev);
            banner.appendChild(btnNext);


            let timer = setInterval(autoPlay,3000);


            // 鼠标移入移除
            banner.onmouseover = ()=>{
                clearInterval(timer);
            }

            banner.onmouseout = ()=>{
                timer = setInterval(autoPlay,3000);

            }

            banner.onclick = e=>{
                // 点击分页切换
                if(e.target.parentNode.className === 'page'){
                    // 修改index值为当前分页数字-1
                    index = e.target.innerText-1;

                    show();
                }

                // 上一张，下一张
                else if(e.target.className === 'btn-prev'){
                    index--;
                    show();
                }else if(e.target.className === 'btn-next'){
                    index++;
                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index>=len){
                    // 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index*banner.clientWidth});

                for(let i=0;i<len-1;i++){
                    page.children[i].className = ''
                }

                if(index===len-1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active';
                    
                }
            }





            var topd=document.querySelector('.topd');
            var whole_top = document.querySelector('#whole_top');
            var header = document.querySelector('#header');
            var nav = document.querySelector('#nav');
            var banner_content = document.querySelector('#banner_content');
            var new_czt = document.querySelector('.new_czt');
            var new_tm = document.querySelector('.new_tm');

            // 左边栏
            var column=document.querySelector('.left_column');
            column.style.display='none';
            window.onscroll=function(){
        var scrollY = window.scrollY;
        if(scrollY>=(whole_top.offsetHeight+header.offsetHeight+nav.offsetHeight+banner_content.offsetHeight+new_czt.offsetHeight+new_tm.offsetHeight)){
                column.style.display='block';
       
        }else{
            
            column.style.display='none';
            console.log(555);
            
        }
    
    }

    // 置顶按钮
        var toTop = document.querySelector('#toTop');
    // 点击返回顶部
    toTop.onclick = function () {
        var timer = setInterval(function () {
            var speed = Math.ceil(window.scrollY / 5);
            scrollBy(0, -speed);
            if (window.scrollY <= 0) {
                clearInterval(timer);
            }
        }, 30)
    }




// 首页
var goodslist=document.querySelector('.goodslist')
var xhr = new XMLHttpRequest();//readyState=0
            
            xhr.onreadystatechange = function(){
                // console.log(xhr.readyState)
                if(xhr.readyState === 4){
                    // 确认数据接收完毕
                    // 在次获取数据：responseText
                    var data = JSON.parse(xhr.responseText);
                    goodslist.innerHTML = data.map(function(item){
                        // return `
                        //      <li>
                        //     <a href="#"><img src="${item.img}" alt="" /></a>
                        //     <p>${item.name}</p>
                        //     <p class="price">￥：<span>${item.price}</span></p>

                        //     <p class="sale"><del>￥：${item.sale}</del></p>
                            
                        //     </li>
                        //     `
                        //     
                            
                        return ` 
                            <ul>
                                <li data-guid="${item.id}">
                                    <a href="#">
                                        <img src="${item.img}" alt="" />
                                    </a>
                                    <p>
                                        <a href="#"> ${item.name}</a>
                                    </p>
                                    <p class="jiagelan">
                                        <span class="symbal">￥</span>
                                        <span class="sale">${item.sale}</span>
                                            
                                        <span class="shoucang">
                                            <a href="#">收藏</a>
                                        </span>
                                    </p>
                                        
                                </li>
                            </ul>
                        
                        `

                    }).join('')

                }
            }

            // 配置参数，建立与服务器连接
            xhr.open('get','../api/home_list.php',true);//readyState=1

            // 发起请求
            xhr.send();//readyState=2
            // console.log(xhr);

          

});