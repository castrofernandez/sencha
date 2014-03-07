Ext.define('Ejercicio1.view.TemplateDemo', {
    extend: 'Ext.Panel',
    alias: 'widget.template',
    config: {
        title: 'Template',
        iconCls: 'info',
        scrollable: true,
        data: {
            countries: [{
                country: 'Cuba',
                flagColors: ['azul', 'rojo', 'blanco']
            }, {
                country: 'España',
                flagColors: ['rojo', 'amarillo']
            }, {
                country: 'Asturias',
                flagColors: ['azul', 'amarillo']
            }]
        },
        tpl: Ext.create('Ext.XTemplate', '<tpl for="countries">',
            '<div>{#}. {country}: {flagColors:this.join}</div>',
            '</tpl>', {
                join: function(value) {
                    return value.join(', ');
                }
            })
    }
});
