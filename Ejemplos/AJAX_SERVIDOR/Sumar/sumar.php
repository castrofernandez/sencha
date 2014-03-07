<?php
	$operando1 = isset($_GET['operando1']) ? $_GET['operando1'] : 1;
	$operando2 = isset($_GET['operando2']) ? $_GET['operando2'] : 1;
	
	$resultado = array("resultado" => "OK", 
						"valor" => ($operando1 + $operando2));
						
	echo json_encode($resultado);
?>