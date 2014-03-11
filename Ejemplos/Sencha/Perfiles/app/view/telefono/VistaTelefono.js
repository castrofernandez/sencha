Ext.define('Perfiles.view.telefono.VistaTelefono', {
    extend: 'Ext.Container',
    xtype: 'vistatelefono',
    config: {
        html: 'Vista de teléfono',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Probar',
                listeners: {
                    tap: function() {
                        Ext.Msg.alert('Perfil de teléfono');
                    }
                }
            }]
        }]
    }
});

