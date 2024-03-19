<?php
if(isset($_POST['maintenance-toggle'])) {
    $status = $_POST['maintenance-toggle'] == 'on' ? 'on' : 'off';
    file_put_contents('maintenance_status.txt', $status);
    header('Location: admin.html');
    exit;
}
?>
