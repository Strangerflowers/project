<?php 

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "project"; 
  
// 创建连接 
$con =mysqli_connect($servername, $username, $password, $dbname);

//中文问号乱码加这个；
$con->set_charset('utf8');  
// 检测连接 
  
   
$sql = "SELECT * FROM home_list"; 
$result = mysqli_query($con,$sql); 
if (!$result) {
  printf("Error: %s\n", mysqli_error($con));
  exit();
}
  
$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
  $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小 
  for($i=0;$i<$count;$i++){ 
    unset($rows[$i]);//删除冗余数据 
  }
  array_push($jarr,$rows);
}
echo $str=json_encode($jarr,JSON_UNESCAPED_UNICODE);
//将数组进行json编码

?>