/**
 * An event listener is added to listen to tap events on the map.
 * Clicking on the map displays an alert box containing the latitude and longitude
 * of the location pressed.
 * @param  {H.Map} map      A HERE Map instance within the application
*/
var coordenadas = [];

function setUpClickListener(map) {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', function (evt) {
        var coord = map.screenToGeo(evt.currentPointer.viewportX,
            evt.currentPointer.viewportY);
        logEvent('Su ubicación es:  ' + Math.abs(coord.lat.toFixed(4)) +
            ((coord.lat > 0) ? ' N' : ' S') +
            ' ' + Math.abs(coord.lng.toFixed(4)) +
            ((coord.lng > 0) ? ' E' : ' O'));
        // Extra oara mostrr coordenadas
        coordenadas = [coord.lat.toFixed(4), coord.lng.toFixed(4)];
        document.getElementById("coordenadas").innerHTML =
            "Coordenadas: " + coordenadas[0] + ((coord.lat > 0) ? ' N' : ' S') + ", " + coordenadas[1] + ((coord.lng > 0) ? ' E' : ' O');

    });
}



/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    apikey: "dGd7LF26BLuFn3krebLaYsLOZj9cxURZIP3QfBeT678",
    "app_id": "97lMnFgG7YOiaVfIvNgb",
    "app_code": "9RCFPxToJKnznpHlatJiZQ"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
        center: { lat: 30.94625288456589, lng: -54.10861860580418 },
        zoom: 1,
        pixelRatio: window.devicePixelRatio || 1
    });
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: create custom logging facilities


// Helper for logging events
function logEvent(str) {
    var entry = document.createElement('label');
    entry.className = 'log-entry';
    entry.textContent = str;
    //alert(entry.textContent);
}

function moveMapToCordoba(map) {
    map.setCenter({ lat: -31.442, lng: -64.195 });
    map.setZoom(12);
}

window.onload = function () {
    moveMapToCordoba(map);
}
setUpClickListener(map);

