Ext.define('Mapa.controller.MuseoController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            museo: 'museo',
            button: 'nextview #mapa',
            listado: 'museo list'
        },
        control: {
            listado: {
                itemtap: 'showMuseos'
            },
            button: {
	            tap: 'pulsarBoton'
            }
        }
    },

    showMuseos: function(list, index, element, record) {
    	var latitud = 0;
    	var longitud = 0;
    	var botonActivo = false;
    	
    	if (record.get('localizacion')) {
    		var localizacion = record.get('localizacion').split(" ");
    		var latitud = localizacion.length > 0 ? localizacion[0] : 0;
    		var longitud = localizacion.length > 1 ? localizacion[1] : 0;
    		
    		botonActivo = true;
    	}
    	
    	var detalle = Ext.create('Mapa.view.Detalle',{
    		title: 'Detalle',
        	contenido: '<div> <img src=\"' + record.get('foto') +' \" alt="" /></div>' + '<div> <p> <strong> Email: </strong>' + record.get('correo-electronico') + '</p></div>' +
                '<div> <p> <strong>Horarios: </strong>' + record.get('horario') + '</p></div>' + '<div>' + record.get('descripcion') + '</div>'
                 + '<div><strong>Dirección: </strong>' + record.get('direccion') + '</div>'
                 + '<div><strong>Localización: </strong>' + record.get('localizacion') + '</div>',
            latitud: latitud,
            longitud: longitud,
            botonActivo: botonActivo
        });
    
        this.getMuseo().push(detalle);
    },
    pulsarBoton: function() {
	    var info = this.getButton().getParent(); 
	 
	    var map = Ext.widget('panel', {
	            title: 'Mapa',
	            layout: {
	                type: 'fit'
	            },
	            items: [
	                  {
	                    xtype: 'map',
	                    useCurrentLocation: false,
	                    mapOptions: {
	                        zoom: (Ext.os.is.Phone) ? 12 : 16,
	                        center: new google.maps.LatLng(info.config.latitud, info.config.longitud)
	                    },
	                    listeners: {
	                        maprender: function(component, gMap, eOpts) {
	                            // Añadir marcador con efecto caída
	                            var marker = new google.maps.Marker({
	                                map: gMap,
	                                animation: google.maps.Animation.DROP,
	                                position: new google.maps.LatLng(info.config.latitud, info.config.longitud),
	                            });
	                        }
	                    }
	                }
	            ]
	        });

        this.getMuseo().push(map);
    }

});
