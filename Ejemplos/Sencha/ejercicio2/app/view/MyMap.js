Ext.define('Ejercicio2.view.MyMap', {
    extend: 'Ext.Panel',
    alias: 'widget.mymap',
    config: {
        title: 'Map',
        iconCls: 'action',
        layout: {
            type: 'card'
        },
        items: [

            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Mapa',
                margin: 0
            }, {
                xtype: 'map',
                useCurrentLocation: false,
                mapOptions: {
                    zoom: (Ext.os.is.Phone) ? 6 : 8,
                    center: new google.maps.LatLng(42.851806, -5.817261)
                },
                listeners: {
                    maprender: function(component, googleMap, eOpts) {
                        var store = Ext.getStore('storeCiudades');
                        var markers = [];
                        store.each(function(city, index, length) {
                            var position = new google.maps.LatLng(city.get("latitud"), city.get("longitud"));
                            var marker = new google.maps.Marker({
                                position: position,
                                city: city
                            });
                            marker.setClickable(true);
                            markers.push(marker);
                            google.maps.event.addListener(marker, 'mouseup', function() {
                                var city = this.city;
                                var content = '<span style="font-weight: bold">' + city.get('nombre') + '</span>';
                                if (!component.infoWindow) {
                                    component.infoWindow = new google.maps.InfoWindow();
                                }
                                component.infoWindow.setContent(content);
                                component.infoWindow.open(googleMap, this);
                            });
                        });
                        var mcOptions = { gridSize: 50, maxZoom: 16 };
                        var markerCluster = new MarkerClusterer(googleMap, markers, mcOptions);
                    }
                }
            }
        ]
    }
});
