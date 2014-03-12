Ext.define("Notas.controller.Notas", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            notasListContainer: "notaslistcontainer",
            notaEditor: "notaeditor"
        },
        control: {
            notasListContainer: {
                nuevaNota: "onNuevaNota",
                editarNota: "onEditarNota"
            },
            notaEditor: {
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

        var notaEditor = this.getNotaEditor();
        notaEditor.setRecord(record);
        Ext.Viewport.animateActiveItem(notaEditor, this.slideLeftTransition);
    },
    activateNotasList: function () {
        Ext.Viewport.animateActiveItem(this.getNotasListContainer(), this.slideRightTransition);
    },

    // Comandos
    onNuevaNota: function () {

        console.log("onNuevaNota");

        var ahora = new Date();
        var notaId = (ahora.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var nueva = Ext.create("Notas.model.Nota", {
            id: notaId,
            creacion: ahora,
            nota: "",
            texto: ""
        });

        this.activateNotaEditor(nueva); 
     
    },
    onEditarNota: function (list, record) {

        console.log("onEditarNota");

        this.activateNotaEditor(record);
    },
    onGuardarNota: function () {

        console.log("onGuardarNota");

        var notaEditor = this.getNotaEditor();

        var notaEnCurso = notaEditor.getRecord();
        var nuevosValores = notaEditor.getValues();

        // Update the current nota's fields with form values.
        notaEnCurso.set("nota", nuevosValores.nota);
        notaEnCurso.set("texto", nuevosValores.texto);

        var errors = notaEnCurso.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Espere', errors.getByField("nota")[0].getMessage(), Ext.emptyFn);
            notaEnCurso.reject();
            return;
        }

        var notasStore = Ext.getStore("Notas");

        if (null == notasStore.findRecord('id', notaEnCurso.data.id)) {
            notasStore.add(notaEnCurso);
        }

        notasStore.sync();

        notasStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateNotasList();
    }, 
    onBorrarNota: function () {

        console.log("onBorrarNota");

        var notaEditor = this.getNotaEditor();
        var notaEnCurso = notaEditor.getRecord();
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
        Ext.getStore("Notas").load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});