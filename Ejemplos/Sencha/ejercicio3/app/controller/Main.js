Ext.define('Ejercicio3.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            noticias: 'noticias'
        },
        control: {
            //TODO: add event handlers here
             'noticias list': {
                    itemtap: 'showNews'
           }
        }
    },

    showNews: function (list, index, element, record) {
        this.getNoticias().push({
            xtype:'panel',
            title: record.get('title'),
            html: record.get('content'),
            scrollable: true,
            styleHtmlContent: true
        });
    }

});
