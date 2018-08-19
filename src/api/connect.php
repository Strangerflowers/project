<?php
/**
 * @Author: Marte
 * @Date:   2018-08-18 11:37:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-18 15:52:05
 */
    // 配置参数
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "project";


    // 创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);
    // var_dump($conn);

     // 检测连接
    if ($conn->connect_error) {
        // 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }


?>