Ext.define("Notas.view.NotasList", {
    extend: "Ext.dataview.List",
    alias: "widget.notaslist",
    config: {
        loadingText: "Cargando notas",
        emptyText: "<div class=\"notes-list-empty-text\">No hay notas</div>",
        onItemDisclosure: true,
        grouped: true,
        itemTpl: "<div class=\"list-item-title\">{nota}</div><div class=\"list-item-narrative\">{texto}</div>"       
    }
});