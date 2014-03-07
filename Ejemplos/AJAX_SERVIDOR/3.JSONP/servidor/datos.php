<?php
	$retorno = isset($_GET['retorno']) ? $_GET['retorno'] : 'retorno';
	
	echo $retorno . '(';
	
	echo file_get_contents('datos.json');
	
	echo ')';
?>