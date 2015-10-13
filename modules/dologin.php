<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == 'admin' && $password =='admin') {
	echo json_encode(['granted'=>true]);
}
else
{
	echo json_encode(['granted'=>false]);
}