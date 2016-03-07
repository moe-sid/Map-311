mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGtpbGxtb2UiLCJhIjoiY2lrNzBzYnRwMDEyMHA3a3M1ZGJ1cnI1eSJ9.XlC0AJ2yJYQBRJfgoxXUWA';

var map	=	new	mapboxgl.Map({		
	container:'map', //container id	in HTML
	style:'mapbox://styles/mustkillmoe/cik71shz400e696kp2tvv4slx', //stylesheet	location
	center:	[-79.34, 43.72],	//starting	point, longitude/latitude
	zoom: 10.5, //starting	zoom	level
	maxZoom: 17,
	minZoom: 10.5
});

map.on ('style.load', function () {
	map.addSource ('GreenSpace', {
		'type': 'vector',
		'url': 'mapbox://mustkillmoe.8if63m8g'
	});
	
	map.addLayer ({
		'id': 'GreenSpace',
		'type': 'fill',
		'source': 'GreenSpace',
		'layout': {},
		'paint': {
			'fill-color': 'green',
			'fill-opacity': 0.4
		},
		'source-layer': 'city_green_space_wgs84'
		
	});
	
	map.addSource ('Fountains', {
		'type': 'vector',
		'url': 'mapbox://mustkillmoe.10jilbpj'
	});
	
	map.addLayer ({
		'id': 'Fountains',
		'type': 'circle',
		'source': 'Fountains',
		'layout': {},
		'paint': {
			'circle-color': 'cyan',
			'circle-radius': 2.5,
		},
		'source-layer': 'pfr_drinking_fountain_wgs84',
	});
	
	
});

addLayer('Vegetation', 'GreenSpace');
addLayer('Drinking Stations', 'Fountains');

function addLayer(name, id) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(id, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(id, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(id, 'visibility', 'visible');
        };
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
};

map.addControl(new mapboxgl.Navigation());


map.addControl(new mapboxgl.Geocoder());

//Lily's test comment
