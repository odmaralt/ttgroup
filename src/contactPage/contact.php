<?php
if(isset($_POST['submit'])){
    $to = "elbeg@nestsolutions.llc";

    $name = $_POST['name'];
    $number= $_POST['number'];
    $email= $_POST['email'];
    $info= $_POST['info'];
    
    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"Phone : ".$number. "\r\n" .
            "Email : ".$email. "\r\n" .
            "Info : ".$info. "\r\n" .
    		"Message : " . $body;
    if(mail($to, $name,  $number,$body ,$email,$info, $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>