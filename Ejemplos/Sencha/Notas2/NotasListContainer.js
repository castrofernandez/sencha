Ext.define("Notas.view.NotasListContainer", {
    extend: "Ext.Container",
    alias: "widget.notaslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var nueva = {
            xtype: "button",
            text: 'Nueva',
            ui: 'action',
            handler: this.onNuevaNota,
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
                disclose: { fn: this.onEditarNota, scope: this }
            }
        };

        this.add([toolbar, notasList]);
    },
    onNuevaNota: function () {
        console.log("newNotaCommand");
        this.fireEvent("nuevaNota", this);
    },
    onEditarNota: function (list, record, target, index, evt, options) {
        console.log("editNotaCommand");
        this.fireEvent('editarNota', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }
});