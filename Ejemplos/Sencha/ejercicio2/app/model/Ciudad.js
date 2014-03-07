Ext.define('Ejercicio2.model.Ciudad', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           {name: 'idCiudad',type: 'int'},
           {name: 'nombre', type: 'string'},
           {name: 'latitud',type: 'float'},
           {name: 'longitud',type: 'float'}
           ],
        idProperty: 'idCiudad'
    }
});
