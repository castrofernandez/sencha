$(document).ready(function () {
	cargarEfectosConciertos();
});

function cargarEfectosConciertos(){
	//EN UN PRINCIPIO, LA PARTE CON EL RESULTADO DE LA COMPRA LA OCULTAMOS
	$('#datos-compra').hide();

	//EFECTOS AL CLICKAR ENCIMA DE UN CONCIERTO
	$('#conciertos .concierto').click(function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
		}else{
			$(this).addClass("selected");
		}
	});

	//EFECTOS AL CLICKAR EN EL BOTON DE "CONTINUAR COMPRA"
	$('#conciertos .boton').click(function(){
		$('#conciertos-final').empty();
		
		var preciototal = 0;
		var conciertosfinal = $('#datos-compra #conciertos-final');

		$('#conciertos .concierto.selected').each(function(){
			var precio = parseFloat($(this).children(".precio").children("span").html());
			preciototal += precio;
			
			//TRUE IMPORTANTE PARA COPIAR TAMBIEN COMPORTAMIENTO DE TODOS LOS ELEMENTOS
			var concierto = $(this).clone(true);
			concierto.css('background','#96ED89');
			concierto.appendTo(conciertosfinal);
		});

		if(preciototal == 0){
			alert("Debes seleccionar al menos un concierto para continuar el proceso de compra");
		}else{
			mostrarFinalizarCompra(preciototal);
		}
	});

	//EFECTOS AL CLICKAR EN EL BOTÓN DE "VOLVER AL PASO 1"
	$('#datos-compra .volver').click(function(){
		mostrarSeleccionEntradas();
	});

	//EFECTOS AL CAMBIAR EL NÚMERO DE ENTRADAS QUE QUEREMOS PARA UN CONCIERTO
	$('.concierto .entradas .nentradas').change(function(){
		var preciototal = 0;

		$('#datos-compra #conciertos-final .concierto').each(function(){
			var precio = parseFloat($(this).children(".precio").children("span").html());
			var cantidad = parseInt($(this).children(".entradas").children(".nentradas").val())
			preciototal += precio*cantidad;
		});

		actualizarPrecioTotal(preciototal);
	});
}

function mostrarFinalizarCompra(preciototal){
	actualizarPrecioTotal(preciototal);
	
	$('#conciertos').slideUp();
	$('#datos-compra').slideDown();
}

function mostrarSeleccionEntradas(){
	actualizarPrecioTotal(0);
	
	$('#datos-compra').slideUp();
	$('#conciertos').slideDown();
}

function actualizarPrecioTotal(preciototal){
	$('#datos-compra #precio-total').fadeOut(function(){
		$('#datos-compra #precio-total #cantidad').html(preciototal);
		$('#datos-compra #precio-total').fadeIn();
	});
}