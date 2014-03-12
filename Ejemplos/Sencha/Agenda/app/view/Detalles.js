Ext.define('Agenda.view.Detalles', {

    extend: 'Ext.form.Panel',
    xtype: 'detalles',
    id: 'formulario-contacto',

    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                title: 'Info de contacto',
                docked: 'top',
                ui: 'dark',
                items: [
                    {
                        ui: 'back',
                        text: 'Volver',
                        handler: function()
                        {
                            Ext.getCmp('principal').setActiveItem(0);
                        }
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%',
                    clearIcon: false
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'nombre',
                        label: 'Nombre',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'apellidos',
                        label: 'Apellidos',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'telefono',
                        label: 'Tel&eacute;fono',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'direccion',
                        label: 'Direcci&oacute;n',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});