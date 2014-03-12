Ext.define('Agenda.controller.Contactos', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            listado: {
                itemtap: "deseleccionar",
                select: "mostrar"
            }
        },
        refs: {
            principal: 'principal'
        }
    },

    deseleccionar: function(dv, index, item, e)
    {
        setTimeout(function(){
            dv.deselect(index);
        }, 0);
    },

    mostrar: function(list, record)
    {
        var Principal = this.getPrincipal();
        Principal.setActiveItem(1);
        
        Ext.getCmp('formulario-contacto').setRecord(record);
    }

});