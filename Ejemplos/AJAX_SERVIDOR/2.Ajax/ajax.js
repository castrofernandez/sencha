var http = false;

if (window.XMLHttpRequest) 
	http = new XMLHttpRequest();
else if (window.ActiveXObject) 
	http = new ActiveXObject('Microsoft.XMLHTTP');

function ajax(configuracion)
{
	var url = configuracion.url;
	
	if (!url)
		return;	

	var metodo = configuracion.metodo ? configuracion.metodo.toUpperCase() : 'GET';
	var parametros = configuracion.parametros ? configuracion.parametros : '';
	var retorno = configuracion.retorno;
	var content_type = configuracion.content_type ? configuracion.content_type : false;

	if(http) 
	{
		if (metodo == 'GET')
			url += '?' + parametros;

		http.open(metodo, url, true);
		
		if (metodo != 'GET' && content_type != false)
		{
			// Header is sent with the request
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
		
		http.send(metodo == 'GET' ? null : parametros);
		
		http.onreadystatechange = function() 
		{
			if(http.readyState == 4 && retorno != null && retorno != undefined)
				retorno.call(null, http.responseText);
		};
	}
}