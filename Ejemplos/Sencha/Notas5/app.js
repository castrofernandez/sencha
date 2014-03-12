Ext.application({
    name: "Notas",

    models: ["Nota"],
    stores: ["Notas"],
    controllers: ["Notas"],
    views: ["NotasList", "NotaEditor"],

    launch: function () {
        var notasListView = {
            xtype: "notaslistview"
        };
        
        var notaEditorView = {
            xtype: "notaeditorview"
        };

        Ext.Viewport.add([notasListView, notaEditorView]);
    }
});