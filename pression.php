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
			<h1>Pression atmosphérique</h1>
			<table>
				<tr>
					<td><div id="graph-Bar" style="width:650px; height: 400px; margin-right: 30px;"></div></td>
					<!--<td><div id="jauge-Bar"></div></td>-->
				</tr>
			</table>
			<p>
				Dernière heure : 1007hPa (min: 1009hPa & max: 1002hPa)<br/>
				Dernier jour : 1006hPa(min: 1000hPa & max: 1013hPa)<br/>
				Dernier mois : 1006hPa(min: 1000hPa & max: 1013hPa)<br/>
				Dernière année : 1006hPa(min: 1000hPa & max: 1013hPa)<br />
			</p>
		</section>
		<?php include("pied_de_page.php"); ?>
	</body>
</html>