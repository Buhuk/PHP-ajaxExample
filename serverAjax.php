<?php
    if($_SERVER['REQUEST_METHOD'] = 'GET') {
        if(isset($_GET['cosas'])) {
            header('Content-Type: application/json');
            echo json_encode("Mis datos");

            die();
        }
    }
?>