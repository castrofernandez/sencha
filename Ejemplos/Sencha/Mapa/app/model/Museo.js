Ext.define('Mapa.model.Museo',{
  extend:'Ext.data.Model',
  config: {
    fields:[
      {name:'id', mapping:'categorias.categoria.id' ,type:'int'},
      {name:'nombre', mapping:'nombre.content', type:'string'},
      {name:'descripcion', mapping:'descripcion.content', type:'string'},
      {name: "correo-electronico", type:'string'},
      {
      	name: "direccion", 
      	type:'object',
      	convert: function(value, record) {
           return value[0];
        }	
      },
      {name: "horario", type:'string'},
      {name: "foto", mapping:'foto.content', type:'string'},
      {name: "localizacion", mapping:"localizacion.content", type:"string"}
    ]
  }
});
