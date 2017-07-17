<?php

if (isset($_POST['name']) && isset($_POST['message'])) {
	//escape any html characters
	$name = htmlentities($_POST['name']);
	$message= htmlentities($_POST['message']);
	echo $name;
	echo $message;
}
?>
