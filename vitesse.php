<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
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
			<h1>Vitesse du vent</h1>
			<table>
				<tr>
					<td><div id="graph-Anem" style="width:650px; height: 400px; margin-right: 30px;"></div></td>
					<td><div id="jauge-Anem"></div></td>
				</tr>
			</table>
			<p>
				Dernière heure : 14km/h (min: 10km/h & max: 16km/h)<br/>
				Dernier jour : 12km/h (min: 3km/h & max: 23km/h)<br/>
				Dernier mois : 12km/h (min: 3km/h & max: 23km/h)<br/>
				Dernière année : 12km/h (min: 3km/h & max: 23km/h)<br />
			</p>
		</section>
		<?php include("pied_de_page.php"); ?>
	</body>
</html>