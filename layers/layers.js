var wms_layers = [];
var quadkey = function (x, y, z) {
    var quadKey = [];
    for (var i = z; i > 0; i--) {
        var digit = '0';
        var mask = 1 << (i - 1);
        if ((x & mask) != 0) {
            digit++;
        }
        if ((y & mask) != 0) {
            digit++;
            digit++;
        }
        quadKey.push(digit);
    }
    return quadKey.join('');
};
var lyr_BingAerial_0 = new ol.layer.Tile({
    'title': 'Bing Aerial',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        crossOrigin: 'anonymous',
        tileUrlFunction: function (tileCoord, pixelRatio, projection) {
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];
            return "http://ecn.t3.tiles.virtualearth.net/tiles/a" + quadkey(x, y, z) + ".jpeg?g=1";
        }
        // url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1' 
    })
});
var lyr_GoogleSatellite_1 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        crossOrigin: 'anonymous',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});
var lyr_GoogleMaps_2 = new ol.layer.Tile({
    'title': 'Google Maps',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        crossOrigin: 'anonymous',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    })
});


var lyr_OSMSatellite_3 = new ol.layer.Tile({
    'title': 'ESRI Satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        crossOrigin: 'anonymous',
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    })
});

var lyr_AppleSatellite_4 = new ol.layer.Tile({
    'title': 'Apple Satellite',
    'type': 'base',
    'opacity': 1.000000,

    source: new ol.source.XYZ({
        attributions: ' ',
        crossOrigin: 'anonymous',
        tileUrlFunction: function (tileCoord) {
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];

            var manualToken = localStorage.getItem("manualAppleToken");
            if (manualToken) {
                return 'https://sat-cdn.apple-mapkit.com/tile?style=7&size=2&scale=1&z=' + z + '&x=' + x + '&y=' + y + '&v=10321&accessKey=' + encodeURIComponent(manualToken.trim());
            }

            // Return empty transparent tile if token isn't provided yet
            return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
    })
});

lyr_BingAerial_0.setVisible(true); lyr_GoogleSatellite_1.setVisible(true); lyr_GoogleMaps_2.setVisible(true); lyr_OSMSatellite_3.setVisible(true); lyr_AppleSatellite_4.setVisible(true);
var layersList = [lyr_AppleSatellite_4, lyr_BingAerial_0, lyr_GoogleSatellite_1, lyr_OSMSatellite_3, lyr_GoogleMaps_2];