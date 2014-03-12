Ext.define("Notas.view.NotasListContainer", {
    extend: "Ext.Container",
    alias: "widget.notaslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var nueva = {
            xtype: "button",
            text: 'Nueva',
            ui: 'action',
            handler: this.pulsarNueva,
            scope: this
        };

        var toolbar = {
            xtype: "toolbar",
            title: 'Mis notas',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                nueva
            ]
        };

        var notasList = {
            xtype: "notaslist",
            store: Ext.getStore("Notas"),
            listeners: {
                disclose: { fn: this.editarNota, scope: this }
            }
        };

        this.add([toolbar, notasList]);
    },
    pulsarNueva: function () {
        console.log("pulsarNueva");
        this.fireEvent("nuevaNota", this);
    },
    editarNota: function (list, record, target, index, evt, options) {
        console.log("editarNota");
        this.fireEvent('editarNota', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }
});