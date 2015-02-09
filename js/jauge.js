// SCRIPT ANEMOMETRE : TIFENN
$(document).ready(function () {
	$('#jauge-Anem').jqxGauge({
		ranges: [{ startValue: 0, endValue: 30, style: { fill: '#ADFF2F', stroke: '#ADFF2F' }, endWidth: 3, startWidth: 1 },
			{ startValue: 30, endValue: 70, style: { fill: '#008000', stroke: '#008000' }, endWidth: 6, startWidth: 3 },
			{ startValue: 70, endValue: 110, style: { fill: '#FFA500', stroke: '#FFA500' }, endWidth: 9, startWidth: 6 },
			{ startValue: 110, endValue: 160, style: { fill: '#FF0000', stroke: '#FF0000' }, endWidth: 12, startWidth: 9}],
			ticksMinor: { interval: 5, size: '5%',},
			ticksMajor: { interval: 20, size: '9%' },
			value: 0, 
			colorScheme: 'scheme05',
			animationDuration: 1200,
			width: 300,
			height: 300,
			min: 0,
			max: 160,
			labels: {interval:10},
			caption: { value: 'Vitesse du vent Km/h', position: 'bottom', offset: [0, 10], visible: true }
		});
		var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
				{ name:'vitv' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[4];
					$('#jauge-Anem').jqxGauge('value', parseInt(record.vitv));
				}
			});			
			dataAdapterGauge.dataBind();
			});
			
			
// SCRIPT PRESSION : JUSTIN		
			$(document).ready(function () {
			$('#jauge-Bar').jqxLinearGauge({
                ranges: [{ startValue: 940, endValue: 970, style: { fill: '#FF0000', stroke: '#FF0000' }, endWidth: 3, startWidth: 1 },
                            { startValue: 970, endValue: 1000, style: { fill: '#FF8C00', stroke: '#FF8C00' }, endWidth: 6, startWidth: 3 },
                            { startValue: 1000, endValue: 1025, style: { fill: '#FFD700', stroke: '#FFD700' }, endWidth: 9, startWidth: 6 },
                            { startValue: 1025, endValue: 1050, style: { fill: '#ADFF2F', stroke: '#ADFF2F' }, endWidth: 12, startWidth: 9}],
							
                ticksMinor: { interval: 1, size: '5%',},
                ticksMajor: { interval: 5, size: '9%' },
                value: 940, 
                colorScheme: 'scheme02',
                animationDuration: 1200,
				width: 150,
				height: 400,
				min: 940,
				max: 1050,
				labels: {interval:20, position: 'far' },
				caption: { value: 'Pression Atsmosphérique hPa', position: 'bottom', offset: [0, 10], visible: true }
            });
             var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
					{ name:'press' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[1];
					$('#jauge-Bar').jqxLinearGauge('value', parseInt(record.press));
				}
			});			
			dataAdapterGauge.dataBind();
						});
						
						
// SCRIPT GIROUETTE : LAUREMARIE		
			$(document).ready(function () {
				var Directions = {
        0: 'Ouest',
		22: 'NOO',
		45: 'NO',
		67: 'NNO',
        90: 'Nord',
		112: 'NNE',
        135: 'NE',
		157: 'NEE',
        180: 'Est',
		202: 'SEE',
        225: 'SE',
		247: 'SSE',
        270: 'Sud',
		292: 'SSO',
        315: 'SO',
		337: 'SOO'
	};
	$('#jauge-Gir').jqxGauge({ 
		width: 300,
		height:300,
		startAngle: 0,
		endAngle:359,
		min:0,
		max:359,
		value:90,
		animationDuration: 0,
		ticksDistance:'10%',
		ticksMinor:{size: '5%',interval:45},
		ticksMajor:{size: '10%',interval:90},
		colorScheme: 'scheme01',
		pointer: { pointerType: 'default', style: { fill: '#ff0000', stroke: '#ff0000' }, length: '65%', width: '6%', visible: true },
		style: { fill: '#ffffff', stroke: '#cccccc' },
		labels: {
                interval: 1,
				position: 'inside',
                formatValue: function (val) {
				if (val in Directions) {return Directions[val]; }
					else { return ''; }
                }
        },
	});
	var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Direction' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[3];
					$('#jauge-Gir').jqxGauge('value', parseInt(record.Direction)*45);
					var posAiguilleN;
					if (parseInt(record.Direction) > 3) {posAiguilleN = (parseInt(record.Direction)-4)*45;}
					else {posAiguilleN = (parseInt(record.Direction)*45) + 180 ;}
					
				}
			});			
			dataAdapterGauge.dataBind();
						});
						
						
// SCRIPT HYGROMETRE : JUSTIN			
			$(document).ready(function () {
			            $('#jauge-Hygro').jqxGauge({
                ranges: [{ startValue: 0, endValue: 40, style: { fill: '#FF0000', stroke: '#FF0000' }, endWidth: 3, startWidth: 1 },
                            { startValue: 40, endValue: 60, style: { fill: '#008000', stroke: '#008000' }, endWidth: 6, startWidth: 3 },
                            { startValue: 60, endValue: 100, style: { fill: '#0000FF', stroke: '#0000FF' }, endWidth: 9, startWidth: 6 }],
                ticksMinor: { interval: 1, size: '5%',},
                ticksMajor: { interval: 5, size: '9%' },
                value: 0, 
                colorScheme: 'scheme05',
                animationDuration: 1200,
				width: 300,
				height: 300,
				min: 0,
				max: 100,
				labels: {interval:10, position: 'outside'},
				caption: { value: 'Humidité %', position: 'bottom', offset: [0, 10], visible: true }
            });
             var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
					{ name:'hum' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[2];
					$('#jauge-Hygro').jqxGauge('value', parseInt(record.hum));
				}
			});			
			dataAdapterGauge.dataBind();
						});
						
					
// SCRIPT PLUVIOMETRE : CHARLES					
			$(document).ready(function () {
			            $('#jauge-Pluvio').jqxLinearGauge({
                ranges: [{ startValue: 0, endValue: 100, style: { fill: '#ADFF2F', stroke: '#ADFF2F' }, endWidth: 3, startWidth: 1 },
                            { startValue: 100, endValue: 200, style: { fill: '#FFD700', stroke: '#FFD700' }, endWidth: 6, startWidth: 3 },
                            { startValue: 200, endValue: 500, style: { fill: '#FF8C00', stroke: '#FF8C00' }, endWidth: 9, startWidth: 6 },
                            { startValue: 500, endValue: 1000, style: { fill: '#FF0000', stroke: '#FF0000' }, endWidth: 12, startWidth: 9}],
							
                ticksMinor: { interval: 10, size: '5%',},
                ticksMajor: { interval: 50, size: '9%' },
                value: 0, 
                colorScheme: 'scheme02',
                animationDuration: 1200,
				width: 150,
				height: 400,
				min: 0,
				max: 1000,
				labels: {interval:150, position: 'far' },
				caption: { value: 'Pression Atsmosphérique hPa', position: 'bottom', offset: [0, 10], visible: true }
            });
             var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
					{ name:'prec' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[5];
					$('#jauge-Pluvio').jqxLinearGauge('value', parseInt(record.prec));
				}
			});			
			dataAdapterGauge.dataBind();
						});
			
			
// SCRIPT THERMOMETRE : ALEXANDRE			
			$(document).ready(function () {
			            $('#jauge-Temp').jqxGauge({
                ranges: [{ startValue: -25, endValue: 0, style: { fill: '#1E90FF', stroke: '#1E90FF' }, endWidth: 3, startWidth: 1 },
                            { startValue: 0, endValue: 20, style: { fill: '#ADFF2F', stroke: '#ADFF2F' }, endWidth: 6, startWidth: 3 },
                            { startValue: 20, endValue: 35, style: { fill: '#FFA500', stroke: '#FFA500' }, endWidth: 9, startWidth: 6 },
                            { startValue: 35, endValue: 45, style: { fill: '#FF0000', stroke: '#FF0000' }, endWidth: 12, startWidth: 9}],
							
                ticksMinor: { interval: 1, size: '5%',},
                ticksMajor: { interval: 5, size: '9%' },
                value: 0, 
                colorScheme: 'scheme05',
                animationDuration: 1200,
				width: 300,
				height: 300,
				min: -25,
				max: 45,
				labels: {interval:10},
				caption: { value: 'Température °C', position: 'bottom', offset: [0, 10], visible: true }
            });
            var  sourceGauge = 
			{
				datatype:"csv",
				datafields: [
					{ name:'temp' }
				],
				url:'data/actu.txt'
			};
			var dataAdapterGauge = new $.jqx.dataAdapter(sourceGauge, {
                loadComplete: function () {
					var record = dataAdapterGauge.records[0];
					$('#jauge-Temp').jqxGauge('value', parseInt(record.temp));
				}
			});			
			dataAdapterGauge.dataBind();
        });