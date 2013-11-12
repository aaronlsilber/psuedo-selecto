<!DOCTYPE html>
<html>
<head>
	<title>Psuedo Selecto!</title>

	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<h2 class="text--center">Floats</h2>

	<div class="grid grid--1">
		<?php for ($i=1; $i < 21; $i++) { ?>
		<div class="grid__box"><?php echo $i; ?></div>
		<?php } ?>
	</div>

	<h2 class="text--center">Inline-block</h2>

	<div class="grid grid--2">
		<?php for ($i=1; $i < 16; $i++) { ?>
		<div class="grid__box"><?php echo $i; ?></div>
		<?php } ?>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>