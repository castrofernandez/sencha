Ext.define('Ejercicio3.model.Museo',{
  extend:'Ext.data.Model',
  config: {
    fields:[
      {name:'id', mapping:'categorias.categoria.id' ,type:'int'},
      {name:'nombre', mapping:'nombre.content', type:'string'},
      {name:'descripcion', mapping:'descripcion.content', type:'string'},
      {name: "correo-electronico", type:'string'},
      {name: "direccion", mapping:'direccion.content', type:'string'},
      {name: "horario", type:'string'},
      {name: "foto", mapping:'foto.content', type:'string'}

    ]
  }
});
