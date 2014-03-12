Ext.define("Notas.model.Nota", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'creacion', type: 'date', dateFormat: 'c' },
            { name: 'nota', type: 'string' },
            { name: 'texto', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'creacion' },
            { type: 'presence', field: 'title', message: 'Introduzca una nota' }
        ]
    }
});