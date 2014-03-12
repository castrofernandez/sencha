Ext.define('Agenda.model.Contacto', {

    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'nombre',
            'apellidos',
            'telefono',
            'direccion',
            'grupo'
        ]
    }

});