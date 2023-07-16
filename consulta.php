<?php
$metodo = $_SERVER['REQUEST_METHOD'];
if ($metodo === 'GET') {
    echo "El método es GET";
} else {
    echo "ERROR: El método no es GET";
}
?>