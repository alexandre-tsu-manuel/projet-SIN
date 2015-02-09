// SCRIPT ANEMOMETRE : TIFENN
$(document).ready(function () {
           var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'kmh' }
				],
				url:'data/rvitv.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
						unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 0,
                                maxValue: 160,
                                unitInterval: 20,
                                description: 'Vitesse du vent (km/h)'
                            },
                            series: [
                                    { dataField: 'kmh', displayText: 'Temps (min): vitesse (km/h)' },
                                ]
                        }
                    ]
            };
            $('#graph-Anem').jqxChart(settings);
			
			
// SCRIPT ANEMOMETRE : JUSTIN			
			            var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'hpa' }
				],
				url:'data/rpress.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
						unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 900,
                                maxValue: 1100,
                                unitInterval: 20,
                                description: 'Pression (hPa)'
                            },
                            series: [
                                    { dataField: 'hpa', displayText: 'Temps (min): Pression (hPa)' },
                                ]
                        }
                    ]
            };
            $('#graph-Bar').jqxChart(settings);
			
			
// SCRIPT ANEMOMETRE : LAUREMARIE			
			            var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'dirv' }
				],
				url:'data/rdirv.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
                        unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 0,
                                maxValue: 15,
                                unitInterval: 1,
								formatFunction: function (value) {
								var LabelAxey = {0:'Ouest',1:'NOO',2:'NO',3:'NNO',4:'Nord',5:'NNE',6:'NE',7:'NEE',8:'Est',9:'SEE',10:'SE',11:'SSE',12:'Sud',13:'SSO',14:'SO',15:'SOO'};
								return LabelAxey[value]; 
								},
                                description: 'Direction du vent'
                            },
                            series: [
                                    { dataField: 'dirv', displayText: 'Temps (min): Direction' },
                                ]
                        }
                    ]
            };
            $('#graph-Gir').jqxChart(settings);
			
			
// SCRIPT ANEMOMETRE : JUSTIN			
			            var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'hum' }
				],
				url:'data/rhum.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
						unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 0,
                                maxValue: 100,
                                unitInterval: 10,
                                description: 'Humidité (%)'
                            },
                            series: [
                                    { dataField: 'hum', displayText: 'Temps (min): Humidité (%)' },
                                ]
                        }
                    ]
            };
            $('#graph-Hygro').jqxChart(settings);
			
			
// SCRIPT ANEMOMETRE : CHARLES		
			            var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'pluie' }
				],
				url:'data/rprec.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
                        unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 0,
                                maxValue: 50,
                                unitInterval: 5,
                                description: 'Hauteur de Pluie (mm)'
                            },
                            series: [
                                    { dataField: 'pluie', displayText: 'Temps (min): pluie (mm)' },
                                ]
                        }
                    ]
            };
            $('#graph-Pluvio').jqxChart(settings);
			
			
// SCRIPT ANEMOMETRE : ALEXANDRE			
			var  source = 
			{
				datatype:"csv",
				datafields: [
					{ name:'Temps' },
					{ name:'temp' }
				],
				url:'data/rtemp.txt'
			};
			var dataAdapter	= new $.jqx.dataAdapter(source, { async:false, autoBind:true, 
			loadError: function(xhr, status, error){alert('Error loading "' + source.url + '" : ' + error);}});
            var settings = {
                title: "Depuis 4h",
                description: "",
                padding: { left: 10, top: 10, right: 10, bottom: 10},
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                    {
                        dataField: 'Temps',
                        showGridLines: true,
						unitInterval: 1,
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: -25,
                                maxValue: 45,
                                unitInterval: 10,
                                description: 'Température (°C)'
                            },
                            series: [
                                    { dataField: 'temp', displayText: 'Temps (min): Température (°C)' },
                                ]
                        }
                    ]
            };
            $('#graph-Temp').jqxChart(settings);
        });