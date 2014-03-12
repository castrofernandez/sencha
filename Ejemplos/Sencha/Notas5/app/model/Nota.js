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
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'nota', message: 'Introduzca texto para la nota.' }
        ]
    }
});