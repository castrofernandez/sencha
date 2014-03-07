Ext.define('Ejercicio2.store.StoreCiudades', {
    extend: 'Ext.data.Store',
    config: {
        fields: [{
            name: 'nombre', type: 'string'
        }, {
            name: 'latitud', type: 'float'
        }, {
            name: 'longitud', type: 'float'
        }],
        storeId: 'storeCiudades',

        data: [{
            nombre: 'Oviedo', latitud: 43.361881, longitud: -5.849361
        }, {
            nombre: 'Madrid', latitud: 40.416775, longitud: -3.70379
        }, {
            nombre: 'Gijón', latitud: 43.532202, longitud: -5.66112
        },{
            nombre: 'Avilés', latitud: 43.559745, longitud: -5.924721
        },{
            nombre: 'Burgos', latitud: 42.345731, longitud: -3.696899
        },
        {
            nombre:'Valladolid', latitud: 41.656754, longitud: -4.724464
        }
        ]
    }
});

