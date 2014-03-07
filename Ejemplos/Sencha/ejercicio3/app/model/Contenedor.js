Ext.define('Ejercicio3.model.Contenedor',{
  extend:'Ext.data.Model',
  config: {
    fields:[
      {name:'lugar' ,type:'string'},
      {name:'latitud', type:'string'} ,
      {name:'longitud', type:'string'}
    ]
  }
});
