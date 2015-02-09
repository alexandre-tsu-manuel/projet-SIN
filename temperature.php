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
			<h1>Température</h1>
			<table>
				<tr>
					<td><div id="graph-Temp" style="width:650px; height: 400px; margin-right: 30px;"></div></td>
					<td><div id="jauge-Temp"></div></td>
				</tr>
				
			</table>
			<p>
				Dernière heure : 16°C (min: 15°C & max: 18°C)<br/>
				Dernier jour : 12°C (min: 9°C & max: 18°C)<br/>
				Dernier mois : 12°C (min: 9°C & max: 18°C)<br/>
				Dernière année : 12°C (min: 9°C & max: 18°C)<br />
			</p>
		</section>
		<?php include("pied_de_page.php"); ?>
	</body>
</html>