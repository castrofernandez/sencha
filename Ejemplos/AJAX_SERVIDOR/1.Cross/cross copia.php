<?php header("X-XSS-Protection: 0"); ?>

<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' lang="es">
	<head>
		<meta name="viewport" content="width=device-width"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>Blog</title>
	</head>
	<body>
	<?php
		session_start();
		
		$entradas = array();
		
		if (isset($_SESSION['entradas']))
			$entradas = $_SESSION['entradas'];
		
		if (isset($_POST['entrada'])) {
			$entrada = $_POST['entrada'];
		
			array_push($entradas, $entrada);
			
			$_SESSION['entradas'] = $entradas;
		}
		
		echo '<h1>Entradas</h1>';
		echo '<table>';
		
		for ($i = 0; $i < count($entradas); $i++) {
			echo '<tr>';
			echo '<td>';
			
			echo $entradas[$i];
			
			echo '</td>';
			echo '</tr>';
		}
		
		echo '</table>';
	?>
	</body>
</html>