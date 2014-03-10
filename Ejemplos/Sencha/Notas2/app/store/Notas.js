Ext.define("Notas.store.Notas", {
    extend: "Ext.data.Store",
    config: {
        model: "Notas.model.Nota",
        data: [
            { nota: "Nota 1", texto: "Cuerpo de la nota 1" },
            { nota: "Nota 2", texto: "Cuerpo de la nota 2" },
            { nota: "Nota 3", texto: "Cuerpo de la nota 3" },
            { nota: "Nota 4", texto: "Cuerpo de la nota 4" },
            { nota: "Nota 5", texto: "Cuerpo de la nota 5" },
            { nota: "Nota 6", texto: "Cuerpo de la nota 6" }
        ],
        sorters: [{ property: 'creacion', direction: 'DESC'}]
    }
});