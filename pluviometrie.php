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
			<h1>Précipitations</h1>
			<table>
				<tr>
					<td><div id="graph-Pluvio" style="width:650px; height: 400px; margin-right: 30px;"></div></td>
					<!--<td><div id="jauge-Pluvio"></div></td>-->
				</tr>
			</table>
			<p>
				Dernière heure : 0.8mm (min: 0mm & max: 1.8mm)<br/>
				Dernier jour : 3.2mm (min: 0mm & max: 7.8mm)<br/>
				Dernier mois : 3.2mm (min: 0mm & max: 7.8mm)<br/>
				Dernière année : 3.2mm (min: 0mm & max: 7.8mm)<br />
			</p>
		</section>
		<?php include("pied_de_page.php"); ?>
	</body>
</html>