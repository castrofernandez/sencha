Ext.define("Notas.view.NotasList", {
    extend: "Ext.Container",
    requires:"Ext.dataview.List",
    alias: "widget.notaslistview",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "Mis notas",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    text: 'Nueva',
                    ui: 'action',
                    itemId: "nueva"
                }
            ]
        }, {
            xtype: "list",
            store: "Notas",
            itemId:"notasList",
            loadingText: "Cargando notas",
            emptyText: "<div class=\"notas-list-empty-text\">No hay notas</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\">{nota}</div><div class=\"list-item-narrative\">{texto}</div>"       
        }],
        listeners: [{
            delegate: "#nueva",
            event: "tap",
            fn: "pulsarNueva"
        }, {
            delegate: "#notasList",
            event: "disclose",
            fn: "editarNota"
        }]
    },    
    pulsarNueva: function () {
        console.log("nuevaNota");
        this.fireEvent("nuevaNota", this);
    },
    editarNota: function (list, record, target, index, evt, options) {
        console.log("editarNota");
        this.fireEvent('editarNota', this, record);
    }
});