<?php
/**
 * @Author: Marte
 * @Date:   2018-08-22 00:49:15
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 20:10:27
 */
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
    $sql = "select * from register where username='$username' and password='$password'";

    // 执行sql语句
    $result = $conn->query($sql);

    // var_dump($conn);
    if($result->num_rows>0){
        // var_dump($result);
        echo "success";
    }else{
        echo "fail";
    }

?>