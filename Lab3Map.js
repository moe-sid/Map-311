

mapboxgl.accessToken = 'pk.eyJ1IjoibGlscnJyIiwiYSI6ImNpam14b2t2dTAwYmR1Zm01cnp1NW5mbHAifQ.WBkeIv-7D5xVkKaXcuuOGA';
var map = new mapboxgl.Map({
   container: 'map', 
   style: 'mapbox://styles/lilrrr/ciksupvyh005k98km9zc4ma7s',  
   center: [-79.42,43.77],  
   zoom: 9.8
});

map.on('style.load', function(){


  map.addSource('AirCondition',{ 
    'type': 'vector', 
    'url': 'mapbox://lilrrr.6vgawqiu' 
        });
  
  map.addLayer({ 
    'id': 'AirCondition_layer', 
    'type': 'circle', 
    'source': 'AirCondition', 
    'layout': {}, 
    'paint': { 
      'circle-color': 'white', 
      'circle-radius': 10
    },
    'source-layer': 'locations'
  });

  map.addLayer({ 
      'id': 'LibraryAC', 
      'type': 'circle', 
      'source': 'AirCondition', 
      'layout': {}, 
      'filter': ['==','Location Code', 'LIBRARY'],
      'paint': { 
        'circle-color': 'green', 
        'circle-radius': 3
      },
      'source-layer': 'locations'
    });
 
  map.addLayer({ 
      'id': 'CommunityCentreAC', 
      'type': 'circle', 
      'source': 'AirCondition', 
      'layout': {}, 
      'filter': ['==','Location Code', 'COMM_CNTR'],
      'paint': { 
        'circle-color': 'red', 
        'circle-radius': 3
      },
      'source-layer': 'locations'
    });

});

var layers = document.getElementById('menu');

addLayer('Library', 'LibraryAC');
addLayer('Community Centre', 'CommunityCentreAC');

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
        }
    };
    layers.appendChild(link);
};

function fly() {
    map.flyTo({
        center: [
            -79.42 + (Math.random() - 0.5) * 5,
            40 + (Math.random() - 0.5) * 5]
    });
}






