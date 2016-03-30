
//test

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dyNDAwIiwiYSI6ImNpbGhlZTBoeTJkdWt1dG0wdzNlcXpucjUifQ.az2Trz9xKjXx8L5-g1jHWg';

// var map	=	new	mapboxgl.Map({
// 	container:'map', //container id	in HTML
// 	style:'mapbox://styles/ggr400/cilhef5iy007l9pkv7xhk48rc', //stylesheet	location
// 	center:	[-79.34, 43.72],	//starting	point, longitude/latitude
// 	zoom: 10.5, //starting	zoom	level
// 	minZoom: 10.5
// });


if (!mapboxgl.supported()) {
    alert('Your computer is stupid, because it does not support Mapbox GL');
} else {
    var map	=	new	mapboxgl.Map({
		    container:'map', //container id	in HTML
		    style:'mapbox://styles/ggr400/cilhef5iy007l9pkv7xhk48rc', //stylesheet	location
		    center:	[-79.34, 43.72],	//starting	point, longitude/latitude
		    zoom: 10.7, //starting	zoom	level
        minZoom: 10.7
	   });
};

map.on('style.load', function(){
  map.addSource('week1',{
    "type": 'vector',
    "data": week1
  })
  map.addLayer({
      "id": 'week1',
      "type": 'circle',
      "source": 'week1',
      "layout": {},
      "paint":{
        'circle-color': #ffffcc,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on('style.load', function(){
  map.addSource('week2',{
    "type": 'vector',
    "data": week2
  })
  map.addLayer({
      "id": 'week2',
      "type": 'circle',
      "source": 'week1',
      "layout": {},
      "paint":{
        'circle-color': #c7e9b4,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on('style.load', function(){
  map.addSource('week3',{
    "type": 'vector',
    "data": week3csv
  })
  map.addLayer({
      "id": 'week3',
      "type": 'circle',
      "source": 'week3csv',
      "layout": {},
      "paint":{
        'circle-color': #7fcdbb,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on('style.load', function(){
  map.addSource('week4',{
    "type": 'vector',
    "data": week4csv
  })
  map.addLayer({
      "id": 'week4',
      "type": 'circle',
      "source": 'week4csv',
      "layout": {},
      "paint":{
        'circle-color': #41b6c4,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on('style.load', function(){
  map.addSource('week5',{
    "type": 'vector',
    "data": week5csv
  })
  map.addLayer({
      "id": 'week5',
      "type": 'circle',
      "source": 'week5csv',
      "layout": {},
      "paint":{
        'circle-color': #2c7fb8,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on('style.load', function(){
  map.addSource('week6',{
    "type": 'vector',
    "data": week6csv
  })
  map.addLayer({
      "id": 'week6',
      "type": 'circle',
      "source": 'week6csv',
      "layout": {},
      "paint":{
        'circle-color': #253494,
        'circle-radius': 5,
        'circle-opacity': 1
      }
});

map.on ('style.load', function () {
	map.addSource ('CouncilZones', { // Layer 1
		'type': 'vector',
		'url': 'mapbox://ggr400.8xjq7hc7'
	});

	map.addLayer ({ // L1Z1 (base)
		'id': 'CZ_base',
		'type': 'fill',
		'source': 'CouncilZones',
		'layout': {},
		'paint': {
			'fill-color': '#fbb4ae',
			'fill-opacity': 0.2
		},
		'source-layer': 'community_council_wgs84',
    'filter': ["==", "AREA_NAME", ""]
	});

  map.addLayer({// L1Z1 (hover)
    'id': 'CZ_hover',
    'type': 'fill',
    'source': 'CouncilZones',
    'interactive': true,
    'layout': {},
    'paint': {
      'fill-color': 'cyan',
      'fill-opacity': 0.5,
      'fill-outline-color': 'black'
    },
    'source-layer': 'community_council_wgs84',
    'filter': [ "==", "AREA_NAME", "" ] // start with a filter that doesn't select anything
  });

	map.addLayer ({ //L1Z1A (Scarborough)
		'id': 'Scarborough',
		'type': 'fill',
		'source': 'CouncilZones',
		'interactive': true,
		'layout': {},
		'paint': {
			'fill-color': '#fbb4ae',
			'fill-opacity': 0.2,
			'fill-outline-color': 'white'
		},
		'source-layer': 'community_council_wgs84',
		'filter': [ "==", "OBJECTID", 10056625 ]
	});

  map.addLayer ({// L1Z1B (North York)
		'id': 'NorthYork',
		'type': 'fill',
		'source': 'CouncilZones',
		'interactive': true,
		'layout': {},
		'paint': {
			'fill-color': '#b3cde3',
			'fill-opacity': 0.2,
			'fill-outline-color': 'white'
		},
		'source-layer': 'community_council_wgs84',
		'filter': [ "==", "OBJECTID", 10056641 ]
	});

  map.addLayer ({// L1Z1C (TorontoEastYork)
    'id': 'TorontoEastYork',
    'type': 'fill',
    'source': 'CouncilZones',
    'interactive': true,
    'layout': {},
    'paint': {
      'fill-color': '#ccebc5',
      'fill-opacity': 0.2,
      'fill-outline-color': 'white'
    },
    'source-layer': 'community_council_wgs84',
    'filter': [ "==", "OBJECTID", 11816481 ]
  });

  map.addLayer ({// L1Z1D (Etobicoke)
    'id': 'Etobicoke',
    'type': 'fill',
    'source': 'CouncilZones',
    'interactive': true,
    'layout': {},
    'paint': {
      'fill-color': '#decbe4',
      'fill-opacity': 0.2,
      'fill-outline-color': 'white'
    },
    'source-layer': 'community_council_wgs84',
    'filter': [ "==", "OBJECTID", 12995441 ]
  });
});



// var popup = new mapboxgl.Popup({
//     closeButton: false,
//     closeOnClick: true
// });

map.on("click", function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ["Scarborough", "NorthYork", "Etobicoke", "TorontoEastYork"] });
    map.featuresAt(e.point, {
        radius: 2,
        includeGeometry: true,
        layers: ["Scarborough", "NorthYork", "Etobicoke", "TorontoEastYork"]
    }, function (err, features) {
          //FIRST: We will change the color of the dissemination area we're hovering over

          if (!err && features.length) { //if no error, and features.length is 'true' (meaning there's stuff in there) then do the following
              map.flyTo({
                center: features[0].properties.OBJECTID,
                zoom: 11.7
              });
              map.setFilter("CZ_base", ["==", "AREA_NAME", features[0].properties.AREA_NAME])
                  .setLngLat(e.lngLat);
              // popup.setLngLat(e.lngLat)
              //     .setHTML(features[0].properties.AREA_NAME)
              //     .addTo(map);
          }
          else {
              map.setFilter("CZ_hover", ["==", "AREA_NAME", ""]);
              // popup.remove();
              return;
          }
      });
});



map.on("mousemove", function(e) {
      map.featuresAt(e.point, {
          radius: 2,
          layers: ["CZ_hover"]
          }, function (err, features) {
              if (!err && features.length) { //if no error, and features.length is 'true' (meaning there's stuff in there) then do the following

                  map.getCanvas().style.cursor = (!err && (features[0].properties.AREA_NAME != null)) ? 'pointer' : '';
                  map.setFilter("CZ_hover", ["==", "AREA_NAME", features[0].properties.AREA_NAME]);
                  // popup.setLngLat(e.lngLat)
                  //     .setHTML(features[0].properties.AREA_NAME)
                  //     .addTo(map);
                }
                else {
                  map.setFilter();
                  // popup.remove();
                  return;
                }
            });
});



	// map.addSource ('business_improvement_areas', { // Layer 2
	// 	'type': 'vector',
	// 	'url': 'mapbox://ggr400.b3c9mgpy'
	// });

	// map.addLayer ({ // Layer 2.1
	// 	'id': 'business_improvement_areas',
	// 	'type': 'fill',
	// 	'source': 'business_improvement_areas',
	// 	'layout': {},
	// 	'paint': {
	// 		'fill-color': 'cyan',
	// 		'fill-opacity': 0.5,
	// 		'fill-outline-color': '#ffb366'
	// 	},
	// 	'source-layer': 'business_improvement_area_wgs84'
	// });

	// map.addSource ('Business_development_areas', {
	// 	'type': 'vector',
	// 	'url': 'mapbox://ggr400.b3c9mgpy'
	// });

	// map.addLayer ({
	// 	'id': 'Development',
	// 	'type': 'circle',
	// 	'source': 'Development',
	// 	'layout': {},
	// 	'paint': {
	// 		'circle-color': 'cyan',
	// 		'circle-radius': 2.5,
	// 	},
	// 	'source-layer': 'pfr_drinking_fountain_wgs84',
	// });

// addLayer('Wards', 'Toronto_Wards');
// addLayer('Developments', 'business_improvement_areas');

// function addLayer(name, id) {
//     var link = document.createElement('a');
//     link.href = '#';
//     link.className = 'active';
//     link.textContent = name;

//     link.onclick = function (e) {
//         e.preventDefault();
//         e.stopPropagation();

//         var visibility = map.getLayoutProperty(id, 'visibility');

//         if (visibility === 'visible') {
//             map.setLayoutProperty(id, 'visibility', 'none');
//             this.className = '';
//         } else {
//             this.className = 'active';
//             map.setLayoutProperty(id, 'visibility', 'visible');
//         };
//     };

//     var layers = document.getElementById('menu');
//     layers.appendChild(link);
// };

map.addControl(new mapboxgl.Navigation());


map.addControl(new mapboxgl.Geocoder());



