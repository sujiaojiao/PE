<?php
   //连接数据库
   $mysqli = new mysqli("localhost","root","","php");
   if ($mysqli->connect_errno) {
   	  die($mysqli->connect_error);
   } 
   
   //处理乱码
   $mysqli->query("set names utf8");
   
    $sql = "SELECT * FROM product";
   $result = $mysqli->query($sql); //执行查询语句
   if ($result->num_rows) {
   	   $data = $result->fetch_all(MYSQLI_ASSOC);
   	   echo json_encode($data);
   }
   $mysqli->close();
?>