<?php 
	session_start(); 
	// $usuario = $_POST["txt-username"];
	// $password = $_POST["txt-password"];
	
	$usuario = "isaaceliape@gmail.com";
	$password = "1234";

	if ($usuario == "isaaceliape@gmail.com" && $password == "1234") {
	  $_SESSION['views'] = $usuario;
	}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Timestapp</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<!--[if lt IE 7]>
			<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->
		<a href="#tasks" class="logo">&nbsp;</a>
		<div class="designed-by">Designed by. <div class="wrap-names"><span class="names"><a href="http://www.felipeelioenay.com" target="_blank">Felipe Elioenay</a> & <a href="htttp://www.isaaceliape.com" target="_blank">Isaac Eliape</a></span></div></div>

		
		<div class="wrap-sections">
			<?php
				if ($_SESSION['views'] != ""){
					echo "<button class='bt-menu'></button>";
					include 'menu.php';
					include 'settings.php';
					include 'about.php';
					include 'new_task.php';
					include 'tasks.php';
					echo "<script src='js/app.js'></script>";
				}else{
					include 'login.php';
				}
			?>
		</div>
		

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X');ga('send','pageview');
		</script>
	</body>
</html>
