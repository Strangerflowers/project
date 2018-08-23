<?php
    // 引入connect.php
    include 'home_list.php';

    /*
        接口功能：验证用户名是否存在
        所需参数：
            * username
     */
    
    $username = isset($_GET['username']) ? $_GET['username'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "select * from home_list where name='$username'";

    // 执行sql语句
    $result = $con->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>
