Ext.define("Ejercicio1.view.FitLayout", {
    extend: 'Ext.Container',
    alias: 'widget.fit',
    config: {
        title: 'Fit',
        iconCls: 'info',
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'component',
            margin: 10,
            html: 'Este componente está diseñado para encajar (fit)            en todo el espacio disponible de su contenedor padre',
            style: 'background-color: lightgreen'
        }]

    }
});

