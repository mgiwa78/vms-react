<?php
$servername="localhost";
$username="root";
$password="";
$bd_name="vms_db";
$conect=mysqli_connect($servername,$username,$password,$bd_name);
$getInitialDataQuery="SELECT * FROM `employee_db` WHERE 1";
mysqli_query($conect,$getInitialDataQuery);

$reactText = $_POST["text"];

echo "ant";
echo "$reactText";

if(mysqli_query($conect,$getInitialDataQuery)){
    echo "Sucuess";
};



?>