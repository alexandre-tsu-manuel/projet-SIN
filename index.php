<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Station météorologique - Projet SIN TSTI2D4 LGE</title>
		<?php
			if (!isset($_GET["nocss"]))
				echo '<link rel="stylesheet" href="css/index.css" type="text/css" />';
		?>
		<link rel="stylesheet" href="css/jqx.base.css" type="text/css" />
		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="js/jqwidgets/jqxcore.js"></script>
		<script type="text/javascript" src="js/jqwidgets/jqxdata.js"></script>
		<script type="text/javascript" src="js/jqwidgets/jqxchart.js"></script>
		<script type="text/javascript" src="js/jqwidgets/jqxgauge.js"></script>
		<script type="text/javascript" src="js/jauge.js"></script>
		<script type="text/javascript" src="js/graph.js"></script>
		<link rel="icon" type="image/ico" href="images/icone2.ico" />
	</head>
	<body>
		<?php include("en_tete.php"); ?>
		<?php include("menu.php"); ?>
		<section>
			<h1>Accueil</h1>
			<p>
				Bienvenue sur l'interface de la station météo.
				Vous pouvez consulter les différentes valeurs à partir du menu situé sur la gauche.<br />
				Vous pourrez trouver les dernières valeurs et des moyennes sur toutes les grandeurs physiques suivantes :<br />
				<ul>
					<li>Température</li>
					<li>Pression atmosphérique</li>
					<li>Précipitations</li>
					<li>Humidité</li>
					<li>Direction du vent</li>
					<li>Vitesse du vent</li>
				</ul>
			</p>
		</section>
		<?php include("pied_de_page.php"); ?>
	</body>
</html>