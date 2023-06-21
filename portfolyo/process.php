<?php
include_once 'db.php';
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['msg'])){
    function valid_input($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
      
         return $data;
       }
 $name = valid_input($_POST['name']);
 $email = valid_input($_POST['email']);
 $subject = valid_input($_POST['subject']);
 $msg = valid_input($_POST['msg']);
 $numero = valid_input($_POST['numero']);
 $msgdate = date("Y-m-d H:i:s");
 $error = "";
 $success = "";
  if(empty($name) || strlen($name) > "30" || empty($email) || strlen($email) > "60" || empty($subject) || strlen($subject) > "30" || empty($msg) || strlen($msg) > "200" || empty($numero) || strlen($numero) > "16"){
     http_response_code(400);
     echo json_encode('Worning Some Thing Error Please Try Agai !!!!');
     exit;
  }else{
     // Insert data Into Table Clients Use PDO
      $sql = "INSERT INTO clients (name,email,subject,message,numero,msg_date) VALUES (?,?,?,?,?,?)";
      $clientsmsg= $conn->prepare($sql);
      $clientsmsg->execute([$name, $email, $subject, $msg, $numero, $msgdate]);
      http_response_code(200);
      echo json_encode('Your Message Has Bein Send Thank You....');      
      exit;
  }
}
