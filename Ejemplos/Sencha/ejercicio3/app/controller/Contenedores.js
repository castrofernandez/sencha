Ext.define('Ejercicio3.controller.Contenedores', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            contenedorRopa: 'contenedorRopa'
        },
        control: {
            'contenedorRopa list': {
                itemtap: 'showPosition'
            }
        }
    },

    showPosition: function(list, index, element, record) {
        this.getContenedorRopa().push({
            xtype: 'panel',
            title: record.get('lugar'),
            layout: {
                type: 'fit'
            },
            items: [
                  {
                    xtype: 'map',
                    useCurrentLocation: false,
                    mapOptions: {
                        zoom: (Ext.os.is.Phone) ? 12 : 16,
                        center: new google.maps.LatLng(record.get('latitud'), record.get('longitud'))
                    },
                    listeners: {
                        maprender: function(component, gMap, eOpts) {
                            // Añadir marcador con efecto caída
                            var marker = new google.maps.Marker({
                                map: gMap,
                                animation: google.maps.Animation.DROP,
                                position: new google.maps.LatLng(record.get('latitud'), record.get('longitud')),
                            });
                        }
                    }
                }
            ]
        });
    }
});

