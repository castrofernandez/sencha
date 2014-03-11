Ext.define('Mapa.view.Detalle', {
    extend: 'Ext.form.Panel',
    xtype: 'nextview',
    scrollable: true,
    config: {
        contenido: 'null',
        latitud: null,
        longitud: null,
        botonActivo: false,
        items: [
            {
                xtype: 'label',
                html: 'value',
            },
            {
	            xtype: 'button',
	            text: 'Ver mapa',
	            id: 'mapa',
	            disabled: true
            }
        ]
    },
    initialize : function(){
        this.callParent();
        var val = this.config.contenido;
        this.down('label').setHtml(val);
        
        if (this.config.botonActivo)
        	this.down('button').enable();
    }
});
