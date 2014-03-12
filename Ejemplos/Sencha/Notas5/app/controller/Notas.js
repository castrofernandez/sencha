Ext.define("Notas.controller.Notas", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            notasListView: "notaslistview",
            notaEditorView: "notaeditorview",
            notasList: "#notasList"
        },
        control: {
            notasListView: {
                nuevaNota: "onNuevaNota",
                editarNota: "onEditarNota"
            },
            notaEditorView: {
                guardarNota: "onGuardarNota",
                borrarNota: "onBorrarNota",
                volver: "onVolver"
            }

        }
    },
    // Transiciones
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    // Métodos auxiliares
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateNotaEditor: function (record) {

        var notaEditorView = this.getNotaEditorView();
        notaEditorView.setRecord(record);
        Ext.Viewport.animateActiveItem(notaEditorView, this.slideLeftTransition);
    },
    activateNotasList: function () {
        Ext.Viewport.animateActiveItem(this.getNotasListView(), this.slideRightTransition);
    },

    // Comandos
    onNuevaNota: function () {

        console.log("onNuevaNota");

        var ahora = new Date();
        var notaId = (ahora.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var nuevaNota = Ext.create("Notas.model.Nota", {
            id: notaId,
            dateCreated: ahora,
            title: "",
            narrative: ""
        });

        this.activateNotaEditor(nuevaNota);

    },
    onEditarNota: function (list, record) {

        console.log("onEditarNota");

        this.activateNotaEditor(record);
    },
    onGuardarNota: function () {

        console.log("onGuardarNota");

        var notaEditorView = this.getNotaEditorView();

        var notaEnCurso = notaEditorView.getRecord();
        var nuevosValores = notaEditorView.getValues();

        notaEnCurso.set("nota", nuevosValores.nota);
        notaEnCurso.set("texto", nuevosValores.texto);

        var errores = notaEnCurso.validate();

        if (!errores.isValid()) {
            Ext.Msg.alert('Espere', errores.getByField("nota")[0].getMessage(), Ext.emptyFn);
            notaEnCurso.reject();
            return;
        }

        var notasStore = Ext.getStore("Notas");

        if (null == notasStore.findRecord('id', notaEnCurso.data.id)) {
            notasStore.add(notaEnCurso);
        }

        notasStore.sync();

        notasStore.sort([{ property: 'creacion', direction: 'DESC'}]);

        this.activateNotasList();
    },
    onBorrarNota: function () {

        console.log("onBorrarNota");

        var notaEditorView = this.getNotaEditorView();
        var notaEnCurso = notaEditorView.getRecord();
        var notasStore = Ext.getStore("Notas");

        notasStore.remove(notaEnCurso);
        notasStore.sync();

        this.activateNotasList();
    },
    onVolver: function () {

        console.log("onVolver");
        this.activateNotasList();
    },

    launch: function () {
        this.callParent(arguments);
        var notasStore = Ext.getStore("Notas");
        notasStore.load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});