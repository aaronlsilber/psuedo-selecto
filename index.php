<!DOCTYPE html>
<html>
<head>
	<title>Psuedo Selecto!</title>

	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<ul class="grid--1">
		<?php for ($i=1; $i < 21; $i++) { ?>
		<li class="grid__box"><?php echo $i; ?></li>
		<?php } ?>
	</ul>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>