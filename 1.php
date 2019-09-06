<?php
$str = $_POST['str'];
$filename = $_POST['groupname'];
echo file_put_contents("./content/".$filename.".txt",$str,FILE_APPEND);
?>
