Ext.define('Filtros.controller.MuseoController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            museo: 'museo'
        },
        control: {
            'museo list': {
                itemtap: 'showMuseos'
            }
        }
    },

    showMuseos: function(list, index, element, record) {
        this.getMuseo().push({
            xtype: 'panel',
            title: record.get('nombre'),
            html: '<div> <img src=\"' + record.get('foto') +' \" alt="" /></div>' + '<div> <p> <strong> Email: </strong>' + record.get('correo-electronico') + '</p></div>' +
                '<div> <p> <strong>Horarios: </strong>' + record.get('horario') + '</p></div>' + '<div>' + record.get('descripcion') + '</div>',
            scrollable: true,
            styleHtmlContent: true
        });
    }

});
