<?php
/**
 * @Author: Marte
 * @Date:   2018-08-18 11:36:59
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-18 17:09:41
 */
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "insert into register(username,password) values('$username','$password')";

    // 执行sql语句
    $result = $conn->query($sql);

    // var_dump($conn);
    if($result->num_rows>0){
        echo "success";
    }else{
        echo "fail";
    }

?>