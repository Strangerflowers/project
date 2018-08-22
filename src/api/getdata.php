<?php
/**
 * @Author: Marte
 * @Date:   2018-08-22 14:32:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 20:05:40
 */
    include 'connect.php';

    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 

// 查找数据库中是否存在同名用户
    $sql = "select * from register where username='$username' and password='$password'";

    //获取查询结果集
    $result = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);


    //释放查询结果集，避免资源浪费
    $result->close();



     //判断用户名和密码是否正确
        if($username===$row->$username && $password===$row->$password){
            echo 'ok';
        }else{
            echo 'error';
        }


    // 关闭数据库，避免资源浪费
    $conn->close();