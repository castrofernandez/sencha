Ext.define('Ejercicio2.model.Persona', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           {name: 'personId',type: 'int'},
           {name: 'nombre', type: 'string'},
           {name: 'apellidos',type: 'string'},
           {name: 'teléfono',type: 'string'},
           {name: 'email',type: 'string'},
           {name: 'dirección',type: 'string'},
           {name: 'ciudad',type: 'string'},
           {name: 'CP',type: 'string'},
           {name: 'provincia',type: 'string'},
           {name: 'país',type: 'string'},
           {name: 'descripción',type: 'string'},
           {name: 'contraseña',type: 'string'}
           ],
        idProperty: 'personId'
    }
});

