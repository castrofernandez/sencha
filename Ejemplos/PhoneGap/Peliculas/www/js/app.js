/* Inicio */

$(document).on('pageinit', '#inicio', function(){      
	buscarPeliculas('Star Wars');
});

function buscarPeliculas(texto) {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        nombre = '&query=' + encodeURI(texto),        
        key = '&api_key=470fd2ec8853e25d2f8d86f685d2270e';        
    
    $.ajax({
        url: url + mode + key + nombre ,
        dataType: "jsonp",
        async: true,
        success: function (peliculas) {
            cargarPeliculas(peliculas);
        },
        error: function (request,error) {
            alert('Error de conexión');
        }
    });
}

/* Detalle */

$(document).on('pagebeforeshow', '#detalle', function(){      
    $('#detalles-pelicula').empty();
    $.each(AlmacenDatos.peliculas, function(i, fila) {
        if(fila.id == AlmacenDatos.id) {
        	if (fila.poster_path)
            	$('#detalles-pelicula').append('<li><img src="http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w185' + fila.poster_path + '"></li>');
            	
            $('#detalles-pelicula').append('<li>Título: ' + fila.original_title + '</li>');
            $('#detalles-pelicula').append('<li>Fecha de lanzamiento:' + fila.release_date + '</li>');
            $('#detalles-pelicula').append('<li>Popularidad: ' + fila.popularity + '</li>');   
            $('#detalles-pelicula').append('<li>Puntuación media: ' + fila.vote_average + '</li>');             
            $('#detalles-pelicula').listview('refresh');            
        }
    });    
});

/* Pulsación sobre la lista */

$(document).on('vclick', '#listado-peliculas li a', function(){  
    AlmacenDatos.id = $(this).attr('data-id');
    $.mobile.changePage( "#detalle", { transition: "slide", changeHash: false });
});

/* Buscador */

$('#buscador').on('submit', function() {
	var texto = $(this).find('input').val();
	
	buscarPeliculas(texto);

	event.preventDefault();
});

/* Métodos auxiliares */

var AlmacenDatos = {
    id : null,
    peliculas : null
}

function cargarPeliculas(peliculas){  
        AlmacenDatos.peliculas = peliculas.results;
        
        $('#listado-peliculas').empty();
        
        $.each(peliculas.results, function(i, fila) {
            console.log(JSON.stringify(fila));
            
            var imagen = fila.poster_path ? '<img src="http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w185'+fila.poster_path+'"/>': '';
            
            $('#listado-peliculas').append('<li><a href="" data-id="' + fila.id + '">' + imagen + '<h3>' 
            	+ fila.title + '</h3><p>' + fila.vote_average + '/10</p></a></li>');
        });
        $('#listado-peliculas').listview('refresh');
}

